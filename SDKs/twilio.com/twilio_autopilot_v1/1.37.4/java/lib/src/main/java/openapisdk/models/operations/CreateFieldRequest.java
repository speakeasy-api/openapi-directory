package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldRequest {
    public String serverURL;
    public CreateFieldRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateFieldPathParams pathParams;
    public CreateFieldRequest withPathParams(CreateFieldPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateFieldCreateFieldRequest request;
    public CreateFieldRequest withRequest(CreateFieldCreateFieldRequest request) {
        this.request = request;
        return this;
    }
    public CreateFieldSecurity security;
    public CreateFieldRequest withSecurity(CreateFieldSecurity security) {
        this.security = security;
        return this;
    }
}