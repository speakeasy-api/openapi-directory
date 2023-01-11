package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupApplicationRequest {
    public CreateGroupApplicationPathParams pathParams;
    public CreateGroupApplicationRequest withPathParams(CreateGroupApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationCreateRequest request;
    public CreateGroupApplicationRequest withRequest(openapisdk.models.shared.ApplicationCreateRequest request) {
        this.request = request;
        return this;
    }
}