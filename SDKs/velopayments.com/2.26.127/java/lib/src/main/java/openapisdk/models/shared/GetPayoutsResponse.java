package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPayoutsResponse
 * List Payouts Response
**/
public class GetPayoutsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public PayoutSummaryAudit[] content;
    public GetPayoutsResponse withContent(PayoutSummaryAudit[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public GetPayoutsResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public GetPayoutsResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}