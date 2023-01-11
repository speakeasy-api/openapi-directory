package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsPatchRequest {
    public LicensingLicenseAssignmentsPatchPathParams pathParams;
    public LicensingLicenseAssignmentsPatchRequest withPathParams(LicensingLicenseAssignmentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LicensingLicenseAssignmentsPatchQueryParams queryParams;
    public LicensingLicenseAssignmentsPatchRequest withQueryParams(LicensingLicenseAssignmentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseAssignment request;
    public LicensingLicenseAssignmentsPatchRequest withRequest(openapisdk.models.shared.LicenseAssignment request) {
        this.request = request;
        return this;
    }
    public LicensingLicenseAssignmentsPatchSecurity security;
    public LicensingLicenseAssignmentsPatchRequest withSecurity(LicensingLicenseAssignmentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}