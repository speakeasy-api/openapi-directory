package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApplicationRequest {
    public String serverURL;
    public CreateApplicationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateApplicationPathParams pathParams;
    public CreateApplicationRequest withPathParams(CreateApplicationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateApplicationCreateApplicationRequest request;
    public CreateApplicationRequest withRequest(CreateApplicationCreateApplicationRequest request) {
        this.request = request;
        return this;
    }
    public CreateApplicationSecurity security;
    public CreateApplicationRequest withSecurity(CreateApplicationSecurity security) {
        this.security = security;
        return this;
    }
}