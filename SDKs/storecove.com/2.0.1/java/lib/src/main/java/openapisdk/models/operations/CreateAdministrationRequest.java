package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAdministrationRequest {
    public CreateAdministrationPathParams pathParams;
    public CreateAdministrationRequest withPathParams(CreateAdministrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateAdministrationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}