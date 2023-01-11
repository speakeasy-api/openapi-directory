package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsPatchRequest {
    public DisplayvideoCustomBiddingAlgorithmsPatchPathParams pathParams;
    public DisplayvideoCustomBiddingAlgorithmsPatchRequest withPathParams(DisplayvideoCustomBiddingAlgorithmsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoCustomBiddingAlgorithmsPatchQueryParams queryParams;
    public DisplayvideoCustomBiddingAlgorithmsPatchRequest withQueryParams(DisplayvideoCustomBiddingAlgorithmsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomBiddingAlgorithmInput request;
    public DisplayvideoCustomBiddingAlgorithmsPatchRequest withRequest(openapisdk.models.shared.CustomBiddingAlgorithmInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoCustomBiddingAlgorithmsPatchSecurity security;
    public DisplayvideoCustomBiddingAlgorithmsPatchRequest withSecurity(DisplayvideoCustomBiddingAlgorithmsPatchSecurity security) {
        this.security = security;
        return this;
    }
}