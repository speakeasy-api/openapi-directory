package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateRequest {
    public TranslatePathParams pathParams;
    public TranslateRequest withPathParams(TranslatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TranslateRequestBody request;
    public TranslateRequest withRequest(TranslateRequestBody request) {
        this.request = request;
        return this;
    }
}