package openapisdk.models.operations;



public class FetchItemAssignmentResponse {
    public String contentType;
    public FetchItemAssignmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchItemAssignmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment numbersV2RegulatoryComplianceBundleItemAssignment;
    public FetchItemAssignmentResponse withNumbersV2RegulatoryComplianceBundleItemAssignment(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment numbersV2RegulatoryComplianceBundleItemAssignment) {
        this.numbersV2RegulatoryComplianceBundleItemAssignment = numbersV2RegulatoryComplianceBundleItemAssignment;
        return this;
    }
}