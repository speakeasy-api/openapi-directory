package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerProposalsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerProposalsUpdatePathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revisionNumber")
    public String revisionNumber;
    public AdexchangebuyerProposalsUpdatePathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=updateAction")
    public AdexchangebuyerProposalsUpdateUpdateActionEnum updateAction;
    public AdexchangebuyerProposalsUpdatePathParams withUpdateAction(AdexchangebuyerProposalsUpdateUpdateActionEnum updateAction) {
        this.updateAction = updateAction;
        return this;
    }
}