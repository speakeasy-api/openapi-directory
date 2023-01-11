package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorHandler
 * Custom static error page to be served when an error occurs.
**/
public class ErrorHandler {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public ErrorHandlerErrorCodeEnum errorCode;
    public ErrorHandler withErrorCode(ErrorHandlerErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mimeType")
    public String mimeType;
    public ErrorHandler withMimeType(String mimeType) {
        this.mimeType = mimeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticFile")
    public String staticFile;
    public ErrorHandler withStaticFile(String staticFile) {
        this.staticFile = staticFile;
        return this;
    }
}