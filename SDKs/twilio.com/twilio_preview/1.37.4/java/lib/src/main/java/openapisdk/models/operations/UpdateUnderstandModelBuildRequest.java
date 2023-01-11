package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUnderstandModelBuildRequest {
    public String serverURL;
    public UpdateUnderstandModelBuildRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateUnderstandModelBuildPathParams pathParams;
    public UpdateUnderstandModelBuildRequest withPathParams(UpdateUnderstandModelBuildPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest request;
    public UpdateUnderstandModelBuildRequest withRequest(UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest request) {
        this.request = request;
        return this;
    }
    public UpdateUnderstandModelBuildSecurity security;
    public UpdateUnderstandModelBuildRequest withSecurity(UpdateUnderstandModelBuildSecurity security) {
        this.security = security;
        return this;
    }
}