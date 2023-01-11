package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageWithNoStoreRequest {
    public PredictImageWithNoStorePathParams pathParams;
    public PredictImageWithNoStoreRequest withPathParams(PredictImageWithNoStorePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PredictImageWithNoStoreQueryParams queryParams;
    public PredictImageWithNoStoreRequest withQueryParams(PredictImageWithNoStoreQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PredictImageWithNoStoreHeaders headers;
    public PredictImageWithNoStoreRequest withHeaders(PredictImageWithNoStoreHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PredictImageWithNoStoreRequestBody request;
    public PredictImageWithNoStoreRequest withRequest(PredictImageWithNoStoreRequestBody request) {
        this.request = request;
        return this;
    }
}