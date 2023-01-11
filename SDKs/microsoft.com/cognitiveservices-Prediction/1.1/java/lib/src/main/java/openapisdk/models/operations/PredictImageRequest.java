package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageRequest {
    public PredictImagePathParams pathParams;
    public PredictImageRequest withPathParams(PredictImagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PredictImageQueryParams queryParams;
    public PredictImageRequest withQueryParams(PredictImageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PredictImageHeaders headers;
    public PredictImageRequest withHeaders(PredictImageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PredictImageRequestBody request;
    public PredictImageRequest withRequest(PredictImageRequestBody request) {
        this.request = request;
        return this;
    }
}