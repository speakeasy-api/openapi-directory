package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditAllOrderDealsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deals")
    public MarketplaceDeal[] deals;
    public EditAllOrderDealsRequest withDeals(MarketplaceDeal[] deals) {
        this.deals = deals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposal")
    public Proposal proposal;
    public EditAllOrderDealsRequest withProposal(Proposal proposal) {
        this.proposal = proposal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevisionNumber")
    public String proposalRevisionNumber;
    public EditAllOrderDealsRequest withProposalRevisionNumber(String proposalRevisionNumber) {
        this.proposalRevisionNumber = proposalRevisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateAction")
    public String updateAction;
    public EditAllOrderDealsRequest withUpdateAction(String updateAction) {
        this.updateAction = updateAction;
        return this;
    }
}