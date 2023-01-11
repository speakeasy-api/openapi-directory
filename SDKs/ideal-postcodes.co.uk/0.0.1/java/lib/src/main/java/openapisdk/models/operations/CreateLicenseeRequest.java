package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLicenseeRequest {
    public CreateLicenseePathParams pathParams;
    public CreateLicenseeRequest withPathParams(CreateLicenseePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLicenseeSchema request;
    public CreateLicenseeRequest withRequest(openapisdk.models.shared.CreateLicenseeSchema request) {
        this.request = request;
        return this;
    }
    public CreateLicenseeSecurity security;
    public CreateLicenseeRequest withSecurity(CreateLicenseeSecurity security) {
        this.security = security;
        return this;
    }
}