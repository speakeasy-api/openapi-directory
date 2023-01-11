package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Connection
 * Configuration parameters to establish connection with an external data source, except the credential attributes.
**/
public class Connection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSql")
    public CloudSqlProperties cloudSql;
    public Connection withCloudSql(CloudSqlProperties cloudSql) {
        this.cloudSql = cloudSql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public Connection withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Connection withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendlyName")
    public String friendlyName;
    public Connection withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasCredential")
    public Boolean hasCredential;
    public Connection withHasCredential(Boolean hasCredential) {
        this.hasCredential = hasCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifiedTime")
    public String lastModifiedTime;
    public Connection withLastModifiedTime(String lastModifiedTime) {
        this.lastModifiedTime = lastModifiedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Connection withName(String name) {
        this.name = name;
        return this;
    }
}