package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest {
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest withPathParams(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchUpdateDealsRequestInput request;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest withRequest(openapisdk.models.shared.BatchUpdateDealsRequestInput request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity security;
    public AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateRequest withSecurity(AuthorizedbuyersmarketplaceBuyersProposalsDealsBatchUpdateSecurity security) {
        this.security = security;
        return this;
    }
}