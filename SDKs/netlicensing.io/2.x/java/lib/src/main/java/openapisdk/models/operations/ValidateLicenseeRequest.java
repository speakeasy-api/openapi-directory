package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateLicenseeRequest {
    public ValidateLicenseePathParams pathParams;
    public ValidateLicenseeRequest withPathParams(ValidateLicenseePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public ValidateLicenseeRequestBody request;
    public ValidateLicenseeRequest withRequest(ValidateLicenseeRequestBody request) {
        this.request = request;
        return this;
    }
    public ValidateLicenseeSecurity security;
    public ValidateLicenseeRequest withSecurity(ValidateLicenseeSecurity security) {
        this.security = security;
        return this;
    }
}