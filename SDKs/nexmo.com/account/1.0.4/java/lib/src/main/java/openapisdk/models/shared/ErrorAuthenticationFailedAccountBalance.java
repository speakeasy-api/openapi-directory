package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorAuthenticationFailedAccountBalance
 * Authentication Failed
**/
public class ErrorAuthenticationFailedAccountBalance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error-code")
    public Object errorCode;
    public ErrorAuthenticationFailedAccountBalance withErrorCode(Object errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error-code-label")
    public Object errorCodeLabel;
    public ErrorAuthenticationFailedAccountBalance withErrorCodeLabel(Object errorCodeLabel) {
        this.errorCodeLabel = errorCodeLabel;
        return this;
    }
}