package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSinkValidateRequest {
    public String serverURL;
    public CreateSinkValidateRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSinkValidatePathParams pathParams;
    public CreateSinkValidateRequest withPathParams(CreateSinkValidatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSinkValidateCreateSinkValidateRequest request;
    public CreateSinkValidateRequest withRequest(CreateSinkValidateCreateSinkValidateRequest request) {
        this.request = request;
        return this;
    }
    public CreateSinkValidateSecurity security;
    public CreateSinkValidateRequest withSecurity(CreateSinkValidateSecurity security) {
        this.security = security;
        return this;
    }
}