package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error401PisAdditionalErrors
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
public class Error401PisAdditionalErrors {
    @JsonProperty("code")
    public MessageCode401PisEnum code;
    public Error401PisAdditionalErrors withCode(MessageCode401PisEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error401PisAdditionalErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error401PisAdditionalErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}