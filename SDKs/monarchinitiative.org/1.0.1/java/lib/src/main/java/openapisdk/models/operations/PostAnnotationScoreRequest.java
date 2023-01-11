package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAnnotationScoreRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SufficiencyPostInput request;
    public PostAnnotationScoreRequest withRequest(openapisdk.models.shared.SufficiencyPostInput request) {
        this.request = request;
        return this;
    }
}