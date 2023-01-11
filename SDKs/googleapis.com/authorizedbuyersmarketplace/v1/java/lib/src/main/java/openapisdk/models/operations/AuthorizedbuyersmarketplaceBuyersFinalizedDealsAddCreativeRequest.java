package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest {
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest withPathParams(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddCreativeRequest request;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest withRequest(openapisdk.models.shared.AddCreativeRequest request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity security;
    public AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeRequest withSecurity(AuthorizedbuyersmarketplaceBuyersFinalizedDealsAddCreativeSecurity security) {
        this.security = security;
        return this;
    }
}