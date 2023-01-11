package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LicensingLicenseAssignmentsInsertRequest {
    public LicensingLicenseAssignmentsInsertPathParams pathParams;
    public LicensingLicenseAssignmentsInsertRequest withPathParams(LicensingLicenseAssignmentsInsertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public LicensingLicenseAssignmentsInsertQueryParams queryParams;
    public LicensingLicenseAssignmentsInsertRequest withQueryParams(LicensingLicenseAssignmentsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.LicenseAssignmentInsert request;
    public LicensingLicenseAssignmentsInsertRequest withRequest(openapisdk.models.shared.LicenseAssignmentInsert request) {
        this.request = request;
        return this;
    }
    public LicensingLicenseAssignmentsInsertSecurity security;
    public LicensingLicenseAssignmentsInsertRequest withSecurity(LicensingLicenseAssignmentsInsertSecurity security) {
        this.security = security;
        return this;
    }
}