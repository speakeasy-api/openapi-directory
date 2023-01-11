package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateContinuousProjectRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ContinuousProject request;
    public CreateContinuousProjectRequest withRequest(openapisdk.models.shared.ContinuousProject request) {
        this.request = request;
        return this;
    }
}