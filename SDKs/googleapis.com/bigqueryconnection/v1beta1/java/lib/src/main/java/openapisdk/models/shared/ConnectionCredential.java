package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionCredential
 * Credential to use with a connection.
**/
public class ConnectionCredential {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSql")
    public CloudSqlCredential cloudSql;
    public ConnectionCredential withCloudSql(CloudSqlCredential cloudSql) {
        this.cloudSql = cloudSql;
        return this;
    }
}