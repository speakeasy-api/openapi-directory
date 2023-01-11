package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudSqlPropertiesInput
 * Connection properties specific to the Cloud SQL.
**/
public class CloudSqlPropertiesInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public CloudSqlCredential credential;
    public CloudSqlPropertiesInput withCredential(CloudSqlCredential credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public CloudSqlPropertiesInput withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public CloudSqlPropertiesInput withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CloudSqlPropertiesTypeEnum type;
    public CloudSqlPropertiesInput withType(CloudSqlPropertiesTypeEnum type) {
        this.type = type;
        return this;
    }
}