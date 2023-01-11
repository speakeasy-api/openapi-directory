package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error429AisAdditionalErrors
 * This is a data element to support the declaration of additional errors in the context of [RFC7807]
 * in case of a HTTP error code 429 for.
 * 
**/
public class Error429AisAdditionalErrors {
    @JsonProperty("code")
    public MessageCode429AisEnum code;
    public Error429AisAdditionalErrors withCode(MessageCode429AisEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error429AisAdditionalErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error429AisAdditionalErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}