package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEntityRequest {
    public String serverURL;
    public CreateEntityRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateEntityPathParams pathParams;
    public CreateEntityRequest withPathParams(CreateEntityPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateEntityCreateEntityRequest request;
    public CreateEntityRequest withRequest(CreateEntityCreateEntityRequest request) {
        this.request = request;
        return this;
    }
    public CreateEntitySecurity security;
    public CreateEntityRequest withSecurity(CreateEntitySecurity security) {
        this.security = security;
        return this;
    }
}