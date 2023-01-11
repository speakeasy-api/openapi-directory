package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error405PisCancAdditionalErrors
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
public class Error405PisCancAdditionalErrors {
    @JsonProperty("code")
    public MessageCode405PisCancEnum code;
    public Error405PisCancAdditionalErrors withCode(MessageCode405PisCancEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error405PisCancAdditionalErrors withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error405PisCancAdditionalErrors withTitle(String title) {
        this.title = title;
        return this;
    }
}