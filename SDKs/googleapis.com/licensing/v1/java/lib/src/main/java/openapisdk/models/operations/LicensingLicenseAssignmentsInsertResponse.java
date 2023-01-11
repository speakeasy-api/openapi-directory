package openapisdk.models.operations;



public class LicensingLicenseAssignmentsInsertResponse {
    public String contentType;
    public LicensingLicenseAssignmentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseAssignment licenseAssignment;
    public LicensingLicenseAssignmentsInsertResponse withLicenseAssignment(openapisdk.models.shared.LicenseAssignment licenseAssignment) {
        this.licenseAssignment = licenseAssignment;
        return this;
    }
    public Long statusCode;
    public LicensingLicenseAssignmentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}