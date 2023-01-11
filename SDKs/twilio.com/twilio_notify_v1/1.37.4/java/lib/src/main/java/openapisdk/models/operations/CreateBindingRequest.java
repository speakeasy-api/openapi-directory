package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBindingRequest {
    public String serverURL;
    public CreateBindingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateBindingPathParams pathParams;
    public CreateBindingRequest withPathParams(CreateBindingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateBindingCreateBindingRequest request;
    public CreateBindingRequest withRequest(CreateBindingCreateBindingRequest request) {
        this.request = request;
        return this;
    }
    public CreateBindingSecurity security;
    public CreateBindingRequest withSecurity(CreateBindingSecurity security) {
        this.security = security;
        return this;
    }
}