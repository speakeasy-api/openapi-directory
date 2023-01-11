package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesCreateRequest {
    public Adexchangebuyer2AccountsCreativesCreatePathParams pathParams;
    public Adexchangebuyer2AccountsCreativesCreateRequest withPathParams(Adexchangebuyer2AccountsCreativesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesCreateQueryParams queryParams;
    public Adexchangebuyer2AccountsCreativesCreateRequest withQueryParams(Adexchangebuyer2AccountsCreativesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Creative request;
    public Adexchangebuyer2AccountsCreativesCreateRequest withRequest(openapisdk.models.shared.Creative request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesCreateSecurity security;
    public Adexchangebuyer2AccountsCreativesCreateRequest withSecurity(Adexchangebuyer2AccountsCreativesCreateSecurity security) {
        this.security = security;
        return this;
    }
}