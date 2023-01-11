package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersCreativesPatchRequest {
    public RealtimebiddingBuyersCreativesPatchPathParams pathParams;
    public RealtimebiddingBuyersCreativesPatchRequest withPathParams(RealtimebiddingBuyersCreativesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBuyersCreativesPatchQueryParams queryParams;
    public RealtimebiddingBuyersCreativesPatchRequest withQueryParams(RealtimebiddingBuyersCreativesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeInput request;
    public RealtimebiddingBuyersCreativesPatchRequest withRequest(openapisdk.models.shared.CreativeInput request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBuyersCreativesPatchSecurity security;
    public RealtimebiddingBuyersCreativesPatchRequest withSecurity(RealtimebiddingBuyersCreativesPatchSecurity security) {
        this.security = security;
        return this;
    }
}