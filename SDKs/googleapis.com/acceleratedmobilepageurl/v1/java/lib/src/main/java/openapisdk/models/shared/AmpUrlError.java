package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AmpUrlError
 * AMP URL Error resource for a requested URL that couldn't be found.
**/
public class AmpUrlError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public AmpUrlErrorErrorCodeEnum errorCode;
    public AmpUrlError withErrorCode(AmpUrlErrorErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public AmpUrlError withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originalUrl")
    public String originalUrl;
    public AmpUrlError withOriginalUrl(String originalUrl) {
        this.originalUrl = originalUrl;
        return this;
    }
}