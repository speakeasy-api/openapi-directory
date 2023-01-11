package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RealtimebiddingBuyersCreativesCreateRequest {
    public RealtimebiddingBuyersCreativesCreatePathParams pathParams;
    public RealtimebiddingBuyersCreativesCreateRequest withPathParams(RealtimebiddingBuyersCreativesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RealtimebiddingBuyersCreativesCreateQueryParams queryParams;
    public RealtimebiddingBuyersCreativesCreateRequest withQueryParams(RealtimebiddingBuyersCreativesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreativeInput request;
    public RealtimebiddingBuyersCreativesCreateRequest withRequest(openapisdk.models.shared.CreativeInput request) {
        this.request = request;
        return this;
    }
    public RealtimebiddingBuyersCreativesCreateSecurity security;
    public RealtimebiddingBuyersCreativesCreateRequest withSecurity(RealtimebiddingBuyersCreativesCreateSecurity security) {
        this.security = security;
        return this;
    }
}