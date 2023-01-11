package openapisdk.models.operations;



public class LicensingLicenseAssignmentsListForProductAndSkuResponse {
    public String contentType;
    public LicensingLicenseAssignmentsListForProductAndSkuResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LicenseAssignmentList licenseAssignmentList;
    public LicensingLicenseAssignmentsListForProductAndSkuResponse withLicenseAssignmentList(openapisdk.models.shared.LicenseAssignmentList licenseAssignmentList) {
        this.licenseAssignmentList = licenseAssignmentList;
        return this;
    }
    public Long statusCode;
    public LicensingLicenseAssignmentsListForProductAndSkuResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}