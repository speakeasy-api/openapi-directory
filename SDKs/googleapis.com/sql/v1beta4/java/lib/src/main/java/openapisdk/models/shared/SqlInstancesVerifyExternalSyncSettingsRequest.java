package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SqlInstancesVerifyExternalSyncSettingsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlSyncConfig")
    public MySqlSyncConfig mysqlSyncConfig;
    public SqlInstancesVerifyExternalSyncSettingsRequest withMysqlSyncConfig(MySqlSyncConfig mysqlSyncConfig) {
        this.mysqlSyncConfig = mysqlSyncConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncMode")
    public SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum syncMode;
    public SqlInstancesVerifyExternalSyncSettingsRequest withSyncMode(SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum syncMode) {
        this.syncMode = syncMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyConnectionOnly")
    public Boolean verifyConnectionOnly;
    public SqlInstancesVerifyExternalSyncSettingsRequest withVerifyConnectionOnly(Boolean verifyConnectionOnly) {
        this.verifyConnectionOnly = verifyConnectionOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyReplicationOnly")
    public Boolean verifyReplicationOnly;
    public SqlInstancesVerifyExternalSyncSettingsRequest withVerifyReplicationOnly(Boolean verifyReplicationOnly) {
        this.verifyReplicationOnly = verifyReplicationOnly;
        return this;
    }
}