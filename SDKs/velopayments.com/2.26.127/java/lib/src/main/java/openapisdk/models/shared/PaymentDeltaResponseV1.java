package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentDeltaResponseV1
 * List Payment Changes Response Object
**/
public class PaymentDeltaResponseV1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PaymentDeltaV1[] content;
    public PaymentDeltaResponseV1 withContent(PaymentDeltaV1[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public PaymentDeltaResponseV1 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public PaymentDeltaResponseV1 withPage(Object page) {
        this.page = page;
        return this;
    }
}