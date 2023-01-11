package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateModelBuildRequest {
    public String serverURL;
    public CreateModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateModelBuildPathParams pathParams;
    public CreateModelBuildRequest withPathParams(CreateModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateModelBuildCreateModelBuildRequest request;
    public CreateModelBuildRequest withRequest(CreateModelBuildCreateModelBuildRequest request) {
        this.request = request;
        return this;
    }
    public CreateModelBuildSecurity security;
    public CreateModelBuildRequest withSecurity(CreateModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}