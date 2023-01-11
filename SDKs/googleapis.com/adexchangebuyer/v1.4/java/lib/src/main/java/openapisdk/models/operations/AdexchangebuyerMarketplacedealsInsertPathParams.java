package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacedealsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerMarketplacedealsInsertPathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}