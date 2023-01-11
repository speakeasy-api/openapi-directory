package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionInput
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
**/
public class ConnectionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSql")
    public CloudSqlPropertiesInput cloudSql;
    public ConnectionInput withCloudSql(CloudSqlPropertiesInput cloudSql) {
        this.cloudSql = cloudSql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ConnectionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendlyName")
    public String friendlyName;
    public ConnectionInput withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConnectionInput withName(String name) {
        this.name = name;
        return this;
    }
}