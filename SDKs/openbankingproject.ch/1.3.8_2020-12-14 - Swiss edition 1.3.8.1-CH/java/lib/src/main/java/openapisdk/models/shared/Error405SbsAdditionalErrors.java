package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error405SbsAdditionalErrors
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
public class Error405SbsAdditionalErrors {
    @JsonProperty("code")
    public MessageCode405SbsEnum code;
    public Error405SbsAdditionalErrors withCode(MessageCode405SbsEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error405SbsAdditionalErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error405SbsAdditionalErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}