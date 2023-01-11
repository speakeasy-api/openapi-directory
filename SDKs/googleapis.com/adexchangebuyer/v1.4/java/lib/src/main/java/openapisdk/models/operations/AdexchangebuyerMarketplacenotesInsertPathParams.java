package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacenotesInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerMarketplacenotesInsertPathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}