package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest {
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams pathParams;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest withPathParams(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams queryParams;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest withQueryParams(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ReplaceNegativeKeywordsRequestInput request;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest withRequest(openapisdk.models.shared.ReplaceNegativeKeywordsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity security;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest withSecurity(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity security) {
        this.security = security;
        return this;
    }
}