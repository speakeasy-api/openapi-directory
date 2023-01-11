package openapisdk.models.operations;



public class FetchSupportingDocumentTypeResponse {
    public String contentType;
    public FetchSupportingDocumentTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSupportingDocumentTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocumentType numbersV2RegulatoryComplianceSupportingDocumentType;
    public FetchSupportingDocumentTypeResponse withNumbersV2RegulatoryComplianceSupportingDocumentType(openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocumentType numbersV2RegulatoryComplianceSupportingDocumentType) {
        this.numbersV2RegulatoryComplianceSupportingDocumentType = numbersV2RegulatoryComplianceSupportingDocumentType;
        return this;
    }
}