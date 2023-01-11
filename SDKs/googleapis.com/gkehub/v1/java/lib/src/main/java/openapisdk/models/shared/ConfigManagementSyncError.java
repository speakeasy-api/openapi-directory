package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementSyncError
 * An ACM created error representing a problem syncing configurations
**/
public class ConfigManagementSyncError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ConfigManagementSyncError withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public ConfigManagementSyncError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorResources")
    public ConfigManagementErrorResource[] errorResources;
    public ConfigManagementSyncError withErrorResources(ConfigManagementErrorResource[] errorResources) {
        this.errorResources = errorResources;
        return this;
    }
}