package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest {
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams pathParams;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest withPathParams(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams queryParams;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest withQueryParams(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity security;
    public AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateRequest withSecurity(AuthorizedbuyersmarketplaceBuyersClientsUsersDeactivateSecurity security) {
        this.security = security;
        return this;
    }
}