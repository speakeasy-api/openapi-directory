package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SqlInstancesStartExternalSyncRequest
 * Instance start external sync request.
**/
public class SqlInstancesStartExternalSyncRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlSyncConfig")
    public MySqlSyncConfig mysqlSyncConfig;
    public SqlInstancesStartExternalSyncRequest withMysqlSyncConfig(MySqlSyncConfig mysqlSyncConfig) {
        this.mysqlSyncConfig = mysqlSyncConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skipVerification")
    public Boolean skipVerification;
    public SqlInstancesStartExternalSyncRequest withSkipVerification(Boolean skipVerification) {
        this.skipVerification = skipVerification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncMode")
    public SqlInstancesStartExternalSyncRequestSyncModeEnum syncMode;
    public SqlInstancesStartExternalSyncRequest withSyncMode(SqlInstancesStartExternalSyncRequestSyncModeEnum syncMode) {
        this.syncMode = syncMode;
        return this;
    }
}