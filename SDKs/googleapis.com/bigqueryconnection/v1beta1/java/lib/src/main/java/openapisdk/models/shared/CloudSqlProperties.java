package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudSqlProperties
 * Connection properties specific to the Cloud SQL.
**/
public class CloudSqlProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credential")
    public CloudSqlCredential credential;
    public CloudSqlProperties withCredential(CloudSqlCredential credential) {
        this.credential = credential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("database")
    public String database;
    public CloudSqlProperties withDatabase(String database) {
        this.database = database;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public CloudSqlProperties withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccountId")
    public String serviceAccountId;
    public CloudSqlProperties withServiceAccountId(String serviceAccountId) {
        this.serviceAccountId = serviceAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CloudSqlPropertiesTypeEnum type;
    public CloudSqlProperties withType(CloudSqlPropertiesTypeEnum type) {
        this.type = type;
        return this;
    }
}