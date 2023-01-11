package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest {
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest withPathParams(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DealInput request;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest withRequest(openapisdk.models.shared.DealInput request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity security;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest withSecurity(AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity security) {
        this.security = security;
        return this;
    }
}