package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentDeltaResponse
 * List Payment Changes Response Object
**/
public class PaymentDeltaResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PaymentDelta[] content;
    public PaymentDeltaResponse withContent(PaymentDelta[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PaymentDeltaResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PaymentDeltaResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}