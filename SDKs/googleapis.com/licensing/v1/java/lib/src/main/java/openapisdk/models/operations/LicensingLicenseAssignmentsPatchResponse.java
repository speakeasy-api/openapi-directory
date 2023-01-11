package openapisdk.models.operations;



public class LicensingLicenseAssignmentsPatchResponse {
    public String contentType;
    public LicensingLicenseAssignmentsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseAssignment licenseAssignment;
    public LicensingLicenseAssignmentsPatchResponse withLicenseAssignment(openapisdk.models.shared.LicenseAssignment licenseAssignment) {
        this.licenseAssignment = licenseAssignment;
        return this;
    }
    public Long statusCode;
    public LicensingLicenseAssignmentsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}