package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsCreateRequest {
    public DisplayvideoCustomBiddingAlgorithmsCreateQueryParams queryParams;
    public DisplayvideoCustomBiddingAlgorithmsCreateRequest withQueryParams(DisplayvideoCustomBiddingAlgorithmsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomBiddingAlgorithmInput request;
    public DisplayvideoCustomBiddingAlgorithmsCreateRequest withRequest(openapisdk.models.shared.CustomBiddingAlgorithmInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoCustomBiddingAlgorithmsCreateSecurity security;
    public DisplayvideoCustomBiddingAlgorithmsCreateRequest withSecurity(DisplayvideoCustomBiddingAlgorithmsCreateSecurity security) {
        this.security = security;
        return this;
    }
}