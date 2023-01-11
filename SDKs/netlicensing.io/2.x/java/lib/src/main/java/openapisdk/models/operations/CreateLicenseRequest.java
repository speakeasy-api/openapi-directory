package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateLicenseRequestBody request;
    public CreateLicenseRequest withRequest(CreateLicenseRequestBody request) {
        this.request = request;
        return this;
    }
    public CreateLicenseSecurity security;
    public CreateLicenseRequest withSecurity(CreateLicenseSecurity security) {
        this.security = security;
        return this;
    }
}