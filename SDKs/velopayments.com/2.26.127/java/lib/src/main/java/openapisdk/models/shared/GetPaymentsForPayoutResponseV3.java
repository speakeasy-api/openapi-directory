package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPaymentsForPayoutResponseV3
 * List Payments for payout
**/
public class GetPaymentsForPayoutResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PaymentResponseV3[] content;
    public GetPaymentsForPayoutResponseV3 withContent(PaymentResponseV3[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public GetPaymentsForPayoutResponseV3 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public GetPaymentsForPayoutResponseV3 withPage(Object page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public Object summary;
    public GetPaymentsForPayoutResponseV3 withSummary(Object summary) {
        this.summary = summary;
        return this;
    }
}