package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBiddersBiddingFunctionsActivateRequest {
    public RealtimebiddingBiddersBiddingFunctionsActivatePathParams pathParams;
    public RealtimebiddingBiddersBiddingFunctionsActivateRequest withPathParams(RealtimebiddingBiddersBiddingFunctionsActivatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBiddersBiddingFunctionsActivateQueryParams queryParams;
    public RealtimebiddingBiddersBiddingFunctionsActivateRequest withQueryParams(RealtimebiddingBiddersBiddingFunctionsActivateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public RealtimebiddingBiddersBiddingFunctionsActivateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBiddersBiddingFunctionsActivateSecurity security;
    public RealtimebiddingBiddersBiddingFunctionsActivateRequest withSecurity(RealtimebiddingBiddersBiddingFunctionsActivateSecurity security) {
        this.security = security;
        return this;
    }
}