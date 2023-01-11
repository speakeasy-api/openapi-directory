package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest {
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest withPathParams(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity security;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeRequest withSecurity(AuthorizedbuyersmarketplaceBuyersFinalizedDealsSetReadyToServeSecurity security) {
        this.security = security;
        return this;
    }
}