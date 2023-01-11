package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatePrivateAuctionProposalRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalDealId")
    public String externalDealId;
    public UpdatePrivateAuctionProposalRequest withExternalDealId(String externalDealId) {
        this.externalDealId = externalDealId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public MarketplaceNote note;
    public UpdatePrivateAuctionProposalRequest withNote(MarketplaceNote note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevisionNumber")
    public String proposalRevisionNumber;
    public UpdatePrivateAuctionProposalRequest withProposalRevisionNumber(String proposalRevisionNumber) {
        this.proposalRevisionNumber = proposalRevisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateAction")
    public String updateAction;
    public UpdatePrivateAuctionProposalRequest withUpdateAction(String updateAction) {
        this.updateAction = updateAction;
        return this;
    }
}