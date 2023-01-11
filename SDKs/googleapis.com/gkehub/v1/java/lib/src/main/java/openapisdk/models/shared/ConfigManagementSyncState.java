package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementSyncState
 * State indicating an ACM's progress syncing configurations to a cluster
**/
public class ConfigManagementSyncState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ConfigManagementSyncStateCodeEnum code;
    public ConfigManagementSyncState withCode(ConfigManagementSyncStateCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public ConfigManagementSyncError[] errors;
    public ConfigManagementSyncState withErrors(ConfigManagementSyncError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("importToken")
    public String importToken;
    public ConfigManagementSyncState withImportToken(String importToken) {
        this.importToken = importToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSync")
    public String lastSync;
    public ConfigManagementSyncState withLastSync(String lastSync) {
        this.lastSync = lastSync;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastSyncTime")
    public String lastSyncTime;
    public ConfigManagementSyncState withLastSyncTime(String lastSyncTime) {
        this.lastSyncTime = lastSyncTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceToken")
    public String sourceToken;
    public ConfigManagementSyncState withSourceToken(String sourceToken) {
        this.sourceToken = sourceToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("syncToken")
    public String syncToken;
    public ConfigManagementSyncState withSyncToken(String syncToken) {
        this.syncToken = syncToken;
        return this;
    }
}