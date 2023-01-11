package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseRequest {
    public UpdateLicensePathParams pathParams;
    public UpdateLicenseRequest withPathParams(UpdateLicensePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateLicenseRequestBody request;
    public UpdateLicenseRequest withRequest(UpdateLicenseRequestBody request) {
        this.request = request;
        return this;
    }
    public UpdateLicenseSecurity security;
    public UpdateLicenseRequest withSecurity(UpdateLicenseSecurity security) {
        this.security = security;
        return this;
    }
}