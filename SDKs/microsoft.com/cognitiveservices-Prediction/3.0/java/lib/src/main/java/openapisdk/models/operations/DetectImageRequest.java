package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageRequest {
    public DetectImagePathParams pathParams;
    public DetectImageRequest withPathParams(DetectImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DetectImageQueryParams queryParams;
    public DetectImageRequest withQueryParams(DetectImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public DetectImageRequestBody request;
    public DetectImageRequest withRequest(DetectImageRequestBody request) {
        this.request = request;
        return this;
    }
}