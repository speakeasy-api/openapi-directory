package openapisdk.models.operations;



public class LicensingLicenseAssignmentsUpdateResponse {
    public String contentType;
    public LicensingLicenseAssignmentsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseAssignment licenseAssignment;
    public LicensingLicenseAssignmentsUpdateResponse withLicenseAssignment(openapisdk.models.shared.LicenseAssignment licenseAssignment) {
        this.licenseAssignment = licenseAssignment;
        return this;
    }
    public Long statusCode;
    public LicensingLicenseAssignmentsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}