package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Error
 * The error structure that gets returned with almost all failed API calls
 * 
**/
public class Error {
    @JsonProperty("error_code")
    public ErrorCodeEnum errorCode;
    public Error withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonProperty("error_source")
    public ErrorSourceEnum errorSource;
    public Error withErrorSource(ErrorSourceEnum errorSource) {
        this.errorSource = errorSource;
        return this;
    }
    @JsonProperty("error_type")
    public ErrorTypeEnum errorType;
    public Error withErrorType(ErrorTypeEnum errorType) {
        this.errorType = errorType;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public Error withMessage(String message) {
        this.message = message;
        return this;
    }
}