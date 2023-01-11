package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteOrderDealsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public MarketplaceDeal[] deals;
    public DeleteOrderDealsResponse withDeals(MarketplaceDeal[] deals) {
        this.deals = deals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevisionNumber")
    public String proposalRevisionNumber;
    public DeleteOrderDealsResponse withProposalRevisionNumber(String proposalRevisionNumber) {
        this.proposalRevisionNumber = proposalRevisionNumber;
        return this;
    }
}