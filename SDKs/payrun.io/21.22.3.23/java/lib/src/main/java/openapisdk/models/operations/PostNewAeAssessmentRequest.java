package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNewAeAssessmentRequest {
    public PostNewAeAssessmentPathParams pathParams;
    public PostNewAeAssessmentRequest withPathParams(PostNewAeAssessmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostNewAeAssessmentHeaders headers;
    public PostNewAeAssessmentRequest withHeaders(PostNewAeAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AeAssessment request;
    public PostNewAeAssessmentRequest withRequest(openapisdk.models.shared.AeAssessment request) {
        this.request = request;
        return this;
    }
}