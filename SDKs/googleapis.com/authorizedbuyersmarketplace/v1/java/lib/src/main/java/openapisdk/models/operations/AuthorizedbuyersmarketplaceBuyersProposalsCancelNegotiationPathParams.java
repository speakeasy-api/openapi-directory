package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=proposal")
    public String proposal;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams withProposal(String proposal) {
        this.proposal = proposal;
        return this;
    }
}