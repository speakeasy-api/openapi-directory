package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2BiddersFilterSetsCreateRequest {
    public Adexchangebuyer2BiddersFilterSetsCreatePathParams pathParams;
    public Adexchangebuyer2BiddersFilterSetsCreateRequest withPathParams(Adexchangebuyer2BiddersFilterSetsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2BiddersFilterSetsCreateQueryParams queryParams;
    public Adexchangebuyer2BiddersFilterSetsCreateRequest withQueryParams(Adexchangebuyer2BiddersFilterSetsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FilterSet request;
    public Adexchangebuyer2BiddersFilterSetsCreateRequest withRequest(openapisdk.models.shared.FilterSet request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2BiddersFilterSetsCreateSecurity security;
    public Adexchangebuyer2BiddersFilterSetsCreateRequest withSecurity(Adexchangebuyer2BiddersFilterSetsCreateSecurity security) {
        this.security = security;
        return this;
    }
}