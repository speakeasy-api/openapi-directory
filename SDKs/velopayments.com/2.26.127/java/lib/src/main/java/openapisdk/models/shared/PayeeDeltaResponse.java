package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayeeDeltaResponse
 * List Payee Changes Response Object
**/
public class PayeeDeltaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PayeeDelta[] content;
    public PayeeDeltaResponse withContent(PayeeDelta[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PayeeDeltaResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PayeeDeltaResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}