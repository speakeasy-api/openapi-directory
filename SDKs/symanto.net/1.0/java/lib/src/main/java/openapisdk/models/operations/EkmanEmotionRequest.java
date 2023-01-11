package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EkmanEmotionRequest {
    public EkmanEmotionQueryParams queryParams;
    public EkmanEmotionRequest withQueryParams(EkmanEmotionQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post[] request;
    public EkmanEmotionRequest withRequest(openapisdk.models.shared.Post[] request) {
        this.request = request;
        return this;
    }
}