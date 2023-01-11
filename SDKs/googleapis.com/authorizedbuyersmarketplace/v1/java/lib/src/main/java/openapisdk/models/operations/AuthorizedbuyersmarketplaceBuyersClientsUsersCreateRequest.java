package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest {
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreatePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest withPathParams(AuthorizedbuyersmarketplaceBuyersClientsUsersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersClientsUsersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClientUserInput request;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest withRequest(openapisdk.models.shared.ClientUserInput request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity security;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersCreateRequest withSecurity(AuthorizedbuyersmarketplaceBuyersClientsUsersCreateSecurity security) {
        this.security = security;
        return this;
    }
}