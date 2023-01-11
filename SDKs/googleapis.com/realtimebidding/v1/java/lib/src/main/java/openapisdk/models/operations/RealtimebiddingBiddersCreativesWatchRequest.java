package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersCreativesWatchRequest {
    public RealtimebiddingBiddersCreativesWatchPathParams pathParams;
    public RealtimebiddingBiddersCreativesWatchRequest withPathParams(RealtimebiddingBiddersCreativesWatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersCreativesWatchQueryParams queryParams;
    public RealtimebiddingBiddersCreativesWatchRequest withQueryParams(RealtimebiddingBiddersCreativesWatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RealtimebiddingBiddersCreativesWatchRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersCreativesWatchSecurity security;
    public RealtimebiddingBiddersCreativesWatchRequest withSecurity(RealtimebiddingBiddersCreativesWatchSecurity security) {
        this.security = security;
        return this;
    }
}