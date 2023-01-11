package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest {
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest withPathParams(AuthorizedbuyersmarketplaceBuyersProposalsAcceptPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersProposalsAcceptQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AcceptProposalRequest request;
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest withRequest(openapisdk.models.shared.AcceptProposalRequest request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity security;
    public AuthorizedbuyersmarketplaceBuyersProposalsAcceptRequest withSecurity(AuthorizedbuyersmarketplaceBuyersProposalsAcceptSecurity security) {
        this.security = security;
        return this;
    }
}