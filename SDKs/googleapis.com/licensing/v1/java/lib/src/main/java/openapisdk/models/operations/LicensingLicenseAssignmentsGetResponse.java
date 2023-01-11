package openapisdk.models.operations;



public class LicensingLicenseAssignmentsGetResponse {
    public String contentType;
    public LicensingLicenseAssignmentsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseAssignment licenseAssignment;
    public LicensingLicenseAssignmentsGetResponse withLicenseAssignment(openapisdk.models.shared.LicenseAssignment licenseAssignment) {
        this.licenseAssignment = licenseAssignment;
        return this;
    }
    public Long statusCode;
    public LicensingLicenseAssignmentsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}