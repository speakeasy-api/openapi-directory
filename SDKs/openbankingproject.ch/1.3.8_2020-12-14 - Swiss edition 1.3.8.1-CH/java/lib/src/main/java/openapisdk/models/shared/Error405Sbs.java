package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error405Sbs
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for signing baskets.
 * 
**/
public class Error405Sbs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error405Sbs withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalErrors")
    public Error405SbsAdditionalErrors[] additionalErrors;
    public Error405Sbs withAdditionalErrors(Error405SbsAdditionalErrors[] additionalErrors) {
        this.additionalErrors = additionalErrors;
        return this;
    }
    @JsonProperty("code")
    public MessageCode405SbsEnum code;
    public Error405Sbs withCode(MessageCode405SbsEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error405Sbs withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error405Sbs withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Error405Sbs withType(String type) {
        this.type = type;
        return this;
    }
}