package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLocationRequest {
    public CreateLocationPathParams pathParams;
    public CreateLocationRequest withPathParams(CreateLocationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LocationCreateRequest request;
    public CreateLocationRequest withRequest(openapisdk.models.shared.LocationCreateRequest request) {
        this.request = request;
        return this;
    }
}