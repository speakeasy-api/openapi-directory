package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateOrganizationLicenseRequest {
    public UpdateOrganizationLicensePathParams pathParams;
    public UpdateOrganizationLicenseRequest withPathParams(UpdateOrganizationLicensePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateOrganizationLicenseRequestBody request;
    public UpdateOrganizationLicenseRequest withRequest(UpdateOrganizationLicenseRequestBody request) {
        this.request = request;
        return this;
    }
}