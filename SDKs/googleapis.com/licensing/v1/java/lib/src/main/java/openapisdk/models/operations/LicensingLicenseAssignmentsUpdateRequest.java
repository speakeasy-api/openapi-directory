package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsUpdateRequest {
    public LicensingLicenseAssignmentsUpdatePathParams pathParams;
    public LicensingLicenseAssignmentsUpdateRequest withPathParams(LicensingLicenseAssignmentsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LicensingLicenseAssignmentsUpdateQueryParams queryParams;
    public LicensingLicenseAssignmentsUpdateRequest withQueryParams(LicensingLicenseAssignmentsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseAssignment request;
    public LicensingLicenseAssignmentsUpdateRequest withRequest(openapisdk.models.shared.LicenseAssignment request) {
        this.request = request;
        return this;
    }
    public LicensingLicenseAssignmentsUpdateSecurity security;
    public LicensingLicenseAssignmentsUpdateRequest withSecurity(LicensingLicenseAssignmentsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}