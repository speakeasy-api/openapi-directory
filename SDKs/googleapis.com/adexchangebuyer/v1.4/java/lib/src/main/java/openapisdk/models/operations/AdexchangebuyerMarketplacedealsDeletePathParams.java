package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacedealsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerMarketplacedealsDeletePathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}