package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAdministrationRequest {
    public UpdateAdministrationPathParams pathParams;
    public UpdateAdministrationRequest withPathParams(UpdateAdministrationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public UpdateAdministrationRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}