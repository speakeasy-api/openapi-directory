package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest {
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams pathParams;
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest withPathParams(DisplayvideoCustomBiddingAlgorithmsScriptsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams queryParams;
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest withQueryParams(DisplayvideoCustomBiddingAlgorithmsScriptsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CustomBiddingScriptInput request;
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest withRequest(openapisdk.models.shared.CustomBiddingScriptInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity security;
    public DisplayvideoCustomBiddingAlgorithmsScriptsCreateRequest withSecurity(DisplayvideoCustomBiddingAlgorithmsScriptsCreateSecurity security) {
        this.security = security;
        return this;
    }
}