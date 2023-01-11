package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsPatchRequest {
    public DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams pathParams;
    public DisplayvideoAdvertisersNegativeKeywordListsPatchRequest withPathParams(DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams queryParams;
    public DisplayvideoAdvertisersNegativeKeywordListsPatchRequest withQueryParams(DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NegativeKeywordListInput request;
    public DisplayvideoAdvertisersNegativeKeywordListsPatchRequest withRequest(openapisdk.models.shared.NegativeKeywordListInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity security;
    public DisplayvideoAdvertisersNegativeKeywordListsPatchRequest withSecurity(DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity security) {
        this.security = security;
        return this;
    }
}