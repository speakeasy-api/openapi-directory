package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLabelFromRateRequest {
    public CreateLabelFromRatePathParams pathParams;
    public CreateLabelFromRateRequest withPathParams(CreateLabelFromRatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLabelFromRateRequestBody request;
    public CreateLabelFromRateRequest withRequest(openapisdk.models.shared.CreateLabelFromRateRequestBody request) {
        this.request = request;
        return this;
    }
}