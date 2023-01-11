package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error403Sbs
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for signing baskets.
 * 
**/
public class Error403Sbs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error403Sbs withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalErrors")
    public Error403SbsAdditionalErrors[] additionalErrors;
    public Error403Sbs withAdditionalErrors(Error403SbsAdditionalErrors[] additionalErrors) {
        this.additionalErrors = additionalErrors;
        return this;
    }
    @JsonProperty("code")
    public MessageCode403SbsEnum code;
    public Error403Sbs withCode(MessageCode403SbsEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error403Sbs withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error403Sbs withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Error403Sbs withType(String type) {
        this.type = type;
        return this;
    }
}