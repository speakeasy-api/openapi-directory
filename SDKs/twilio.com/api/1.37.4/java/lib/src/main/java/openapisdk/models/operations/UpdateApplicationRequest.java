package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApplicationRequest {
    public String serverURL;
    public UpdateApplicationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateApplicationPathParams pathParams;
    public UpdateApplicationRequest withPathParams(UpdateApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateApplicationUpdateApplicationRequest request;
    public UpdateApplicationRequest withRequest(UpdateApplicationUpdateApplicationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateApplicationSecurity security;
    public UpdateApplicationRequest withSecurity(UpdateApplicationSecurity security) {
        this.security = security;
        return this;
    }
}