package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFunctionRequest {
    public String serverURL;
    public UpdateFunctionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateFunctionPathParams pathParams;
    public UpdateFunctionRequest withPathParams(UpdateFunctionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateFunctionUpdateFunctionRequest request;
    public UpdateFunctionRequest withRequest(UpdateFunctionUpdateFunctionRequest request) {
        this.request = request;
        return this;
    }
    public UpdateFunctionSecurity security;
    public UpdateFunctionRequest withSecurity(UpdateFunctionSecurity security) {
        this.security = security;
        return this;
    }
}