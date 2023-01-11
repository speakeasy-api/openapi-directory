package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesUpdateRequest {
    public Adexchangebuyer2AccountsCreativesUpdatePathParams pathParams;
    public Adexchangebuyer2AccountsCreativesUpdateRequest withPathParams(Adexchangebuyer2AccountsCreativesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesUpdateQueryParams queryParams;
    public Adexchangebuyer2AccountsCreativesUpdateRequest withQueryParams(Adexchangebuyer2AccountsCreativesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Creative request;
    public Adexchangebuyer2AccountsCreativesUpdateRequest withRequest(openapisdk.models.shared.Creative request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesUpdateSecurity security;
    public Adexchangebuyer2AccountsCreativesUpdateRequest withSecurity(Adexchangebuyer2AccountsCreativesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}