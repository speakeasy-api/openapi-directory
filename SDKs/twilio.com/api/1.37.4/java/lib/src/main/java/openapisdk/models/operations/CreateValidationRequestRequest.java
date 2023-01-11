package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateValidationRequestRequest {
    public String serverURL;
    public CreateValidationRequestRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateValidationRequestPathParams pathParams;
    public CreateValidationRequestRequest withPathParams(CreateValidationRequestPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateValidationRequestCreateValidationRequestRequest request;
    public CreateValidationRequestRequest withRequest(CreateValidationRequestCreateValidationRequestRequest request) {
        this.request = request;
        return this;
    }
    public CreateValidationRequestSecurity security;
    public CreateValidationRequestRequest withSecurity(CreateValidationRequestSecurity security) {
        this.security = security;
        return this;
    }
}