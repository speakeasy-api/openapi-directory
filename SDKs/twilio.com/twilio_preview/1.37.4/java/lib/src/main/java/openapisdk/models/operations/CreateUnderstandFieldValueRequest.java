package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateUnderstandFieldValueRequest {
    public String serverURL;
    public CreateUnderstandFieldValueRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateUnderstandFieldValuePathParams pathParams;
    public CreateUnderstandFieldValueRequest withPathParams(CreateUnderstandFieldValuePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateUnderstandFieldValueCreateUnderstandFieldValueRequest request;
    public CreateUnderstandFieldValueRequest withRequest(CreateUnderstandFieldValueCreateUnderstandFieldValueRequest request) {
        this.request = request;
        return this;
    }
    public CreateUnderstandFieldValueSecurity security;
    public CreateUnderstandFieldValueRequest withSecurity(CreateUnderstandFieldValueSecurity security) {
        this.security = security;
        return this;
    }
}