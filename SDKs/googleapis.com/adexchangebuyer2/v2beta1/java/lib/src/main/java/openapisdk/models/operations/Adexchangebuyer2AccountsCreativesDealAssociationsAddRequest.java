package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest {
    public Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams pathParams;
    public Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest withPathParams(Adexchangebuyer2AccountsCreativesDealAssociationsAddPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams queryParams;
    public Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest withQueryParams(Adexchangebuyer2AccountsCreativesDealAssociationsAddQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddDealAssociationRequest request;
    public Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest withRequest(openapisdk.models.shared.AddDealAssociationRequest request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity security;
    public Adexchangebuyer2AccountsCreativesDealAssociationsAddRequest withSecurity(Adexchangebuyer2AccountsCreativesDealAssociationsAddSecurity security) {
        this.security = security;
        return this;
    }
}