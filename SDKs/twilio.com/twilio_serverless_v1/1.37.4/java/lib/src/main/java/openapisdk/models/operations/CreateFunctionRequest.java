package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFunctionRequest {
    public String serverURL;
    public CreateFunctionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateFunctionPathParams pathParams;
    public CreateFunctionRequest withPathParams(CreateFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateFunctionCreateFunctionRequest request;
    public CreateFunctionRequest withRequest(CreateFunctionCreateFunctionRequest request) {
        this.request = request;
        return this;
    }
    public CreateFunctionSecurity security;
    public CreateFunctionRequest withSecurity(CreateFunctionSecurity security) {
        this.security = security;
        return this;
    }
}