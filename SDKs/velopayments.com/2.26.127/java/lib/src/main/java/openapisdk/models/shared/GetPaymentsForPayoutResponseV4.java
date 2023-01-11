package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPaymentsForPayoutResponseV4
 * List Payments for payout
**/
public class GetPaymentsForPayoutResponseV4 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PaymentResponseV4[] content;
    public GetPaymentsForPayoutResponseV4 withContent(PaymentResponseV4[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public GetPaymentsForPayoutResponseV4 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public GetPaymentsForPayoutResponseV4 withPage(Object page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public Object summary;
    public GetPaymentsForPayoutResponseV4 withSummary(Object summary) {
        this.summary = summary;
        return this;
    }
}