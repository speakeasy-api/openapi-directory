package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSampleRequest {
    public String serverURL;
    public CreateSampleRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSamplePathParams pathParams;
    public CreateSampleRequest withPathParams(CreateSamplePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSampleCreateSampleRequest request;
    public CreateSampleRequest withRequest(CreateSampleCreateSampleRequest request) {
        this.request = request;
        return this;
    }
    public CreateSampleSecurity security;
    public CreateSampleRequest withSecurity(CreateSampleSecurity security) {
        this.security = security;
        return this;
    }
}