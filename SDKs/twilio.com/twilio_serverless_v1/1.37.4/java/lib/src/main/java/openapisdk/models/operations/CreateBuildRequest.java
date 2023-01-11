package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBuildRequest {
    public String serverURL;
    public CreateBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateBuildPathParams pathParams;
    public CreateBuildRequest withPathParams(CreateBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateBuildCreateBuildRequest request;
    public CreateBuildRequest withRequest(CreateBuildCreateBuildRequest request) {
        this.request = request;
        return this;
    }
    public CreateBuildSecurity security;
    public CreateBuildRequest withSecurity(CreateBuildSecurity security) {
        this.security = security;
        return this;
    }
}