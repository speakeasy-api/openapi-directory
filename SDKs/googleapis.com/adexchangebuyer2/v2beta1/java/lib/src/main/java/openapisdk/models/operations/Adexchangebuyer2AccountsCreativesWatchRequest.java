package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesWatchRequest {
    public Adexchangebuyer2AccountsCreativesWatchPathParams pathParams;
    public Adexchangebuyer2AccountsCreativesWatchRequest withPathParams(Adexchangebuyer2AccountsCreativesWatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesWatchQueryParams queryParams;
    public Adexchangebuyer2AccountsCreativesWatchRequest withQueryParams(Adexchangebuyer2AccountsCreativesWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WatchCreativeRequest request;
    public Adexchangebuyer2AccountsCreativesWatchRequest withRequest(openapisdk.models.shared.WatchCreativeRequest request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesWatchSecurity security;
    public Adexchangebuyer2AccountsCreativesWatchRequest withSecurity(Adexchangebuyer2AccountsCreativesWatchSecurity security) {
        this.security = security;
        return this;
    }
}