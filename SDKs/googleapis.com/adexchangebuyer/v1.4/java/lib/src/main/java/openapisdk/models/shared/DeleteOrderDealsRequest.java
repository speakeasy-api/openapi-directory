package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteOrderDealsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealIds")
    public String[] dealIds;
    public DeleteOrderDealsRequest withDealIds(String[] dealIds) {
        this.dealIds = dealIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proposalRevisionNumber")
    public String proposalRevisionNumber;
    public DeleteOrderDealsRequest withProposalRevisionNumber(String proposalRevisionNumber) {
        this.proposalRevisionNumber = proposalRevisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateAction")
    public String updateAction;
    public DeleteOrderDealsRequest withUpdateAction(String updateAction) {
        this.updateAction = updateAction;
        return this;
    }
}