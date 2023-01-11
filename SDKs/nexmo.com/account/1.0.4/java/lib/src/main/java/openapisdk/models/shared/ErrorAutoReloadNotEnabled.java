package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorAutoReloadNotEnabled
 * Auto-Reload not enabled
**/
public class ErrorAutoReloadNotEnabled {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error-code")
    public Object errorCode;
    public ErrorAutoReloadNotEnabled withErrorCode(Object errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error-code-label")
    public Object errorCodeLabel;
    public ErrorAutoReloadNotEnabled withErrorCodeLabel(Object errorCodeLabel) {
        this.errorCodeLabel = errorCodeLabel;
        return this;
    }
}