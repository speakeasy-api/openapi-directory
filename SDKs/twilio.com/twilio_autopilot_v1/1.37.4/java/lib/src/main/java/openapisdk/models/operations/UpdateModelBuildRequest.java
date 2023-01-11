package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateModelBuildRequest {
    public String serverURL;
    public UpdateModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateModelBuildPathParams pathParams;
    public UpdateModelBuildRequest withPathParams(UpdateModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateModelBuildUpdateModelBuildRequest request;
    public UpdateModelBuildRequest withRequest(UpdateModelBuildUpdateModelBuildRequest request) {
        this.request = request;
        return this;
    }
    public UpdateModelBuildSecurity security;
    public UpdateModelBuildRequest withSecurity(UpdateModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}