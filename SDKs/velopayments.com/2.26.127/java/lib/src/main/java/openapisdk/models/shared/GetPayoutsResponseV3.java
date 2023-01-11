package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPayoutsResponseV3
 * List Payouts Response
**/
public class GetPayoutsResponseV3 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PayoutSummaryAuditV3[] content;
    public GetPayoutsResponseV3 withContent(PayoutSummaryAuditV3[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public GetPayoutsResponseV3 withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public GetPayoutsResponseV3 withPage(Object page) {
        this.page = page;
        return this;
    }
}