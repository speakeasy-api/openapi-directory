package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacedealsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerMarketplacedealsUpdatePathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}