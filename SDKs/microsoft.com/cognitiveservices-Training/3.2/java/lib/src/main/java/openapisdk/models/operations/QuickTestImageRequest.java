package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QuickTestImageRequest {
    public QuickTestImagePathParams pathParams;
    public QuickTestImageRequest withPathParams(QuickTestImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public QuickTestImageQueryParams queryParams;
    public QuickTestImageRequest withQueryParams(QuickTestImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public QuickTestImageRequestBody request;
    public QuickTestImageRequest withRequest(QuickTestImageRequestBody request) {
        this.request = request;
        return this;
    }
}