package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerProposalsPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerProposalsPatchPathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revisionNumber")
    public String revisionNumber;
    public AdexchangebuyerProposalsPatchPathParams withRevisionNumber(String revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=updateAction")
    public AdexchangebuyerProposalsPatchUpdateActionEnum updateAction;
    public AdexchangebuyerProposalsPatchPathParams withUpdateAction(AdexchangebuyerProposalsPatchUpdateActionEnum updateAction) {
        this.updateAction = updateAction;
        return this;
    }
}