package openapisdk.models.operations;



public class CreateItemAssignmentResponse {
    public String contentType;
    public CreateItemAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateItemAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment numbersV2RegulatoryComplianceBundleItemAssignment;
    public CreateItemAssignmentResponse withNumbersV2RegulatoryComplianceBundleItemAssignment(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment numbersV2RegulatoryComplianceBundleItemAssignment) {
        this.numbersV2RegulatoryComplianceBundleItemAssignment = numbersV2RegulatoryComplianceBundleItemAssignment;
        return this;
    }
}