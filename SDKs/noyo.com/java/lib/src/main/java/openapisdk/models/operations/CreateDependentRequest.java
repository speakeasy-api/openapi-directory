package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDependentRequest {
    public CreateDependentPathParams pathParams;
    public CreateDependentRequest withPathParams(CreateDependentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DependentCreateRequest request;
    public CreateDependentRequest withRequest(openapisdk.models.shared.DependentCreateRequest request) {
        this.request = request;
        return this;
    }
}