package openapisdk.models.operations;



public class LicensingLicenseAssignmentsListForProductResponse {
    public String contentType;
    public LicensingLicenseAssignmentsListForProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseAssignmentList licenseAssignmentList;
    public LicensingLicenseAssignmentsListForProductResponse withLicenseAssignmentList(openapisdk.models.shared.LicenseAssignmentList licenseAssignmentList) {
        this.licenseAssignmentList = licenseAssignmentList;
        return this;
    }
    public Long statusCode;
    public LicensingLicenseAssignmentsListForProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}