package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposal")
    public String proposal;
    public AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams withProposal(String proposal) {
        this.proposal = proposal;
        return this;
    }
}