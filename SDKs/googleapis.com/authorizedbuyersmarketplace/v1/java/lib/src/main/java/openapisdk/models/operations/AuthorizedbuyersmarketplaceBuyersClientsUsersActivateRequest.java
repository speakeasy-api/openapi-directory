package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest {
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest withPathParams(AuthorizedbuyersmarketplaceBuyersClientsUsersActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersClientsUsersActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity security;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersActivateRequest withSecurity(AuthorizedbuyersmarketplaceBuyersClientsUsersActivateSecurity security) {
        this.security = security;
        return this;
    }
}