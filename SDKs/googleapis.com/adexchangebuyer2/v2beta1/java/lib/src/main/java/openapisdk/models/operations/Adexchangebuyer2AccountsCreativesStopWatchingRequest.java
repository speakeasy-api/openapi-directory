package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Adexchangebuyer2AccountsCreativesStopWatchingRequest {
    public Adexchangebuyer2AccountsCreativesStopWatchingPathParams pathParams;
    public Adexchangebuyer2AccountsCreativesStopWatchingRequest withPathParams(Adexchangebuyer2AccountsCreativesStopWatchingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesStopWatchingQueryParams queryParams;
    public Adexchangebuyer2AccountsCreativesStopWatchingRequest withQueryParams(Adexchangebuyer2AccountsCreativesStopWatchingQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public Adexchangebuyer2AccountsCreativesStopWatchingRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public Adexchangebuyer2AccountsCreativesStopWatchingSecurity security;
    public Adexchangebuyer2AccountsCreativesStopWatchingRequest withSecurity(Adexchangebuyer2AccountsCreativesStopWatchingSecurity security) {
        this.security = security;
        return this;
    }
}