package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest {
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams pathParams;
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest withPathParams(Adexchangebuyer2AccountsCreativesDealAssociationsRemovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams queryParams;
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest withQueryParams(Adexchangebuyer2AccountsCreativesDealAssociationsRemoveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveDealAssociationRequest request;
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest withRequest(openapisdk.models.shared.RemoveDealAssociationRequest request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity security;
    public Adexchangebuyer2AccountsCreativesDealAssociationsRemoveRequest withSecurity(Adexchangebuyer2AccountsCreativesDealAssociationsRemoveSecurity security) {
        this.security = security;
        return this;
    }
}