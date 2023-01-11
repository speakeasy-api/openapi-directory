package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateQueryRequest {
    public String serverURL;
    public CreateQueryRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateQueryPathParams pathParams;
    public CreateQueryRequest withPathParams(CreateQueryPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateQueryCreateQueryRequest request;
    public CreateQueryRequest withRequest(CreateQueryCreateQueryRequest request) {
        this.request = request;
        return this;
    }
    public CreateQuerySecurity security;
    public CreateQueryRequest withSecurity(CreateQuerySecurity security) {
        this.security = security;
        return this;
    }
}