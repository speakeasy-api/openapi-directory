package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsClientsCreateRequest {
    public Adexchangebuyer2AccountsClientsCreatePathParams pathParams;
    public Adexchangebuyer2AccountsClientsCreateRequest withPathParams(Adexchangebuyer2AccountsClientsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsClientsCreateQueryParams queryParams;
    public Adexchangebuyer2AccountsClientsCreateRequest withQueryParams(Adexchangebuyer2AccountsClientsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Client request;
    public Adexchangebuyer2AccountsClientsCreateRequest withRequest(openapisdk.models.shared.Client request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsClientsCreateSecurity security;
    public Adexchangebuyer2AccountsClientsCreateRequest withSecurity(Adexchangebuyer2AccountsClientsCreateSecurity security) {
        this.security = security;
        return this;
    }
}