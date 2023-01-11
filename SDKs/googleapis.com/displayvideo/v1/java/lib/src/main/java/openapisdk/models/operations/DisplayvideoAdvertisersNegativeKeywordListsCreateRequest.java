package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsCreateRequest {
    public DisplayvideoAdvertisersNegativeKeywordListsCreatePathParams pathParams;
    public DisplayvideoAdvertisersNegativeKeywordListsCreateRequest withPathParams(DisplayvideoAdvertisersNegativeKeywordListsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsCreateQueryParams queryParams;
    public DisplayvideoAdvertisersNegativeKeywordListsCreateRequest withQueryParams(DisplayvideoAdvertisersNegativeKeywordListsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NegativeKeywordListInput request;
    public DisplayvideoAdvertisersNegativeKeywordListsCreateRequest withRequest(openapisdk.models.shared.NegativeKeywordListInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity security;
    public DisplayvideoAdvertisersNegativeKeywordListsCreateRequest withSecurity(DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity security) {
        this.security = security;
        return this;
    }
}