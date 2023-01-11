package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error405PisCanc
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for a pament cancelation (PIS).
 * 
**/
public class Error405PisCanc {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error405PisCanc withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalErrors")
    public Error405PisCancAdditionalErrors[] additionalErrors;
    public Error405PisCanc withAdditionalErrors(Error405PisCancAdditionalErrors[] additionalErrors) {
        this.additionalErrors = additionalErrors;
        return this;
    }
    @JsonProperty("code")
    public MessageCode405PisCancEnum code;
    public Error405PisCanc withCode(MessageCode405PisCancEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error405PisCanc withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error405PisCanc withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Error405PisCanc withType(String type) {
        this.type = type;
        return this;
    }
}