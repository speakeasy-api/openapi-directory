package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error400Sbs
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 400 for signing baskets.
 * 
**/
public class Error400Sbs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error400Sbs withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalErrors")
    public Error400SbsAdditionalErrors[] additionalErrors;
    public Error400Sbs withAdditionalErrors(Error400SbsAdditionalErrors[] additionalErrors) {
        this.additionalErrors = additionalErrors;
        return this;
    }
    @JsonProperty("code")
    public MessageCode400SbsEnum code;
    public Error400Sbs withCode(MessageCode400SbsEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error400Sbs withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error400Sbs withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Error400Sbs withType(String type) {
        this.type = type;
        return this;
    }
}