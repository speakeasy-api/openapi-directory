package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerProposalsSetupcompletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerProposalsSetupcompletePathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}