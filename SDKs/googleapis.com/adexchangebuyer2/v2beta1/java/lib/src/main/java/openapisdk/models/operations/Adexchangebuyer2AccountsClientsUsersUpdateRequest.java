package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsUsersUpdateRequest {
    public Adexchangebuyer2AccountsClientsUsersUpdatePathParams pathParams;
    public Adexchangebuyer2AccountsClientsUsersUpdateRequest withPathParams(Adexchangebuyer2AccountsClientsUsersUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsClientsUsersUpdateQueryParams queryParams;
    public Adexchangebuyer2AccountsClientsUsersUpdateRequest withQueryParams(Adexchangebuyer2AccountsClientsUsersUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ClientUser request;
    public Adexchangebuyer2AccountsClientsUsersUpdateRequest withRequest(openapisdk.models.shared.ClientUser request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsClientsUsersUpdateSecurity security;
    public Adexchangebuyer2AccountsClientsUsersUpdateRequest withSecurity(Adexchangebuyer2AccountsClientsUsersUpdateSecurity security) {
        this.security = security;
        return this;
    }
}