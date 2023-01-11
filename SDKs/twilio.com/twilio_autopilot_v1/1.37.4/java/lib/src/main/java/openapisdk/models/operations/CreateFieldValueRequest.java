package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFieldValueRequest {
    public String serverURL;
    public CreateFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateFieldValuePathParams pathParams;
    public CreateFieldValueRequest withPathParams(CreateFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateFieldValueCreateFieldValueRequest request;
    public CreateFieldValueRequest withRequest(CreateFieldValueCreateFieldValueRequest request) {
        this.request = request;
        return this;
    }
    public CreateFieldValueSecurity security;
    public CreateFieldValueRequest withSecurity(CreateFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}