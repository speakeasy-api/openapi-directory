package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostFactorsResidualizationRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostFactorsResidualizationRequestBody request;
    public PostFactorsResidualizationRequest withRequest(PostFactorsResidualizationRequestBody request) {
        this.request = request;
        return this;
    }
}