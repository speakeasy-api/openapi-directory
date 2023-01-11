package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest {
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest withPathParams(AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity security;
    public AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest withSecurity(AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity security) {
        this.security = security;
        return this;
    }
}