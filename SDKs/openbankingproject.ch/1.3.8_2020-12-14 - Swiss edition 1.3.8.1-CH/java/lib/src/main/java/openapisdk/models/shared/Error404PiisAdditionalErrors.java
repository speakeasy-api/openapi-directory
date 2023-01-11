package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error404PiisAdditionalErrors
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
public class Error404PiisAdditionalErrors {
    @JsonProperty("code")
    public MessageCode404PiisEnum code;
    public Error404PiisAdditionalErrors withCode(MessageCode404PiisEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error404PiisAdditionalErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error404PiisAdditionalErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}