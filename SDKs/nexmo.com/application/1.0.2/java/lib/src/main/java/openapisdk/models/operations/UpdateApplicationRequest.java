package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationRequest {
    public UpdateApplicationPathParams pathParams;
    public UpdateApplicationRequest withPathParams(UpdateApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateApplicationRequestBody request;
    public UpdateApplicationRequest withRequest(UpdateApplicationRequestBody request) {
        this.request = request;
        return this;
    }
}