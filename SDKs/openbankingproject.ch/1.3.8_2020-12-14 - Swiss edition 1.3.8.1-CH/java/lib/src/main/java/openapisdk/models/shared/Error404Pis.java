package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Error404Pis
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for PIS.
 * 
**/
public class Error404Pis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public Error404Pis withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalErrors")
    public Error404PisAdditionalErrors[] additionalErrors;
    public Error404Pis withAdditionalErrors(Error404PisAdditionalErrors[] additionalErrors) {
        this.additionalErrors = additionalErrors;
        return this;
    }
    @JsonProperty("code")
    public MessageCode404PisEnum code;
    public Error404Pis withCode(MessageCode404PisEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public Error404Pis withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Error404Pis withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Error404Pis withType(String type) {
        this.type = type;
        return this;
    }
}