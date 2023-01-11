package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest {
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams pathParams;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest withPathParams(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditQueryParams queryParams;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest withQueryParams(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BulkEditNegativeKeywordsRequestInput request;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest withRequest(openapisdk.models.shared.BulkEditNegativeKeywordsRequestInput request) {
        this.request = request;
        return this;
    }
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity security;
    public DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest withSecurity(DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity security) {
        this.security = security;
        return this;
    }
}