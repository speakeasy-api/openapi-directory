package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EmotionRequest {
    public EmotionQueryParams queryParams;
    public EmotionRequest withQueryParams(EmotionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post[] request;
    public EmotionRequest withRequest(openapisdk.models.shared.Post[] request) {
        this.request = request;
        return this;
    }
}