package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddOrderDealsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public MarketplaceDeal[] deals;
    public AddOrderDealsRequest withDeals(MarketplaceDeal[] deals) {
        this.deals = deals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevisionNumber")
    public String proposalRevisionNumber;
    public AddOrderDealsRequest withProposalRevisionNumber(String proposalRevisionNumber) {
        this.proposalRevisionNumber = proposalRevisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateAction")
    public String updateAction;
    public AddOrderDealsRequest withUpdateAction(String updateAction) {
        this.updateAction = updateAction;
        return this;
    }
}