package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsUpdateRequest {
    public Adexchangebuyer2AccountsClientsUpdatePathParams pathParams;
    public Adexchangebuyer2AccountsClientsUpdateRequest withPathParams(Adexchangebuyer2AccountsClientsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsClientsUpdateQueryParams queryParams;
    public Adexchangebuyer2AccountsClientsUpdateRequest withQueryParams(Adexchangebuyer2AccountsClientsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Client request;
    public Adexchangebuyer2AccountsClientsUpdateRequest withRequest(openapisdk.models.shared.Client request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsClientsUpdateSecurity security;
    public Adexchangebuyer2AccountsClientsUpdateRequest withSecurity(Adexchangebuyer2AccountsClientsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}