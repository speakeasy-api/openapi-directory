package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandModelBuildRequest {
    public String serverURL;
    public CreateUnderstandModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUnderstandModelBuildPathParams pathParams;
    public CreateUnderstandModelBuildRequest withPathParams(CreateUnderstandModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandModelBuildCreateUnderstandModelBuildRequest request;
    public CreateUnderstandModelBuildRequest withRequest(CreateUnderstandModelBuildCreateUnderstandModelBuildRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandModelBuildSecurity security;
    public CreateUnderstandModelBuildRequest withSecurity(CreateUnderstandModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}