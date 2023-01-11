package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageWithNoStoreRequest {
    public DetectImageWithNoStorePathParams pathParams;
    public DetectImageWithNoStoreRequest withPathParams(DetectImageWithNoStorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DetectImageWithNoStoreQueryParams queryParams;
    public DetectImageWithNoStoreRequest withQueryParams(DetectImageWithNoStoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public DetectImageWithNoStoreRequestBody request;
    public DetectImageWithNoStoreRequest withRequest(DetectImageWithNoStoreRequestBody request) {
        this.request = request;
        return this;
    }
}