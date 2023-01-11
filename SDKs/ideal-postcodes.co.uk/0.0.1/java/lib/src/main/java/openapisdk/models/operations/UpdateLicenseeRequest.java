package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLicenseeRequest {
    public UpdateLicenseePathParams pathParams;
    public UpdateLicenseeRequest withPathParams(UpdateLicenseePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateLicenseeSchema request;
    public UpdateLicenseeRequest withRequest(openapisdk.models.shared.UpdateLicenseeSchema request) {
        this.request = request;
        return this;
    }
    public UpdateLicenseeSecurity security;
    public UpdateLicenseeRequest withSecurity(UpdateLicenseeSecurity security) {
        this.security = security;
        return this;
    }
}