package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutNewAeAssessmentRequest {
    public PutNewAeAssessmentPathParams pathParams;
    public PutNewAeAssessmentRequest withPathParams(PutNewAeAssessmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PutNewAeAssessmentHeaders headers;
    public PutNewAeAssessmentRequest withHeaders(PutNewAeAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AeAssessment request;
    public PutNewAeAssessmentRequest withRequest(openapisdk.models.shared.AeAssessment request) {
        this.request = request;
        return this;
    }
}