package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateContinuousProjectRequest {
    public UpdateContinuousProjectPathParams pathParams;
    public UpdateContinuousProjectRequest withPathParams(UpdateContinuousProjectPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContinuousProjectUpdateContent request;
    public UpdateContinuousProjectRequest withRequest(openapisdk.models.shared.ContinuousProjectUpdateContent request) {
        this.request = request;
        return this;
    }
}