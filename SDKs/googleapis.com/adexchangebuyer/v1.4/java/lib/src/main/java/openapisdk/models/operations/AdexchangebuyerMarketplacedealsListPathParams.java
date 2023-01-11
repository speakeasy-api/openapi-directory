package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacedealsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerMarketplacedealsListPathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}