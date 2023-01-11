package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersClientsCreateRequest {
    public AuthorizedbuyersmarketplaceBuyersClientsCreatePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersClientsCreateRequest withPathParams(AuthorizedbuyersmarketplaceBuyersClientsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsCreateQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersClientsCreateRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersClientsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClientInput request;
    public AuthorizedbuyersmarketplaceBuyersClientsCreateRequest withRequest(openapisdk.models.shared.ClientInput request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity security;
    public AuthorizedbuyersmarketplaceBuyersClientsCreateRequest withSecurity(AuthorizedbuyersmarketplaceBuyersClientsCreateSecurity security) {
        this.security = security;
        return this;
    }
}