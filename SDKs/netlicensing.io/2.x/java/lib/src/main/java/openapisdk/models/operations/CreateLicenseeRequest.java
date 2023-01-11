package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseeRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateLicenseeRequestBody request;
    public CreateLicenseeRequest withRequest(CreateLicenseeRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateLicenseeSecurity security;
    public CreateLicenseeRequest withSecurity(CreateLicenseeSecurity security) {
        this.security = security;
        return this;
    }
}