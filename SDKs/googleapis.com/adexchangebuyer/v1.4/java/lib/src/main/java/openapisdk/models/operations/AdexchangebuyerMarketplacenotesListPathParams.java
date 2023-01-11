package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdexchangebuyerMarketplacenotesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposalId")
    public String proposalId;
    public AdexchangebuyerMarketplacenotesListPathParams withProposalId(String proposalId) {
        this.proposalId = proposalId;
        return this;
    }
}