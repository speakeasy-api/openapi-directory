package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionError
 * The error code and description for a conversion that failed to insert or update.
**/
public class ConversionError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ConversionErrorCodeEnum code;
    public ConversionError withCode(ConversionErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConversionError withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ConversionError withMessage(String message) {
        this.message = message;
        return this;
    }
}