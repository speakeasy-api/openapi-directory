package openapisdk.models.operations;



public class FetchSupportingDocumentResponse {
    public String contentType;
    public FetchSupportingDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSupportingDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument;
    public FetchSupportingDocumentResponse withNumbersV2RegulatoryComplianceSupportingDocument(openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument) {
        this.numbersV2RegulatoryComplianceSupportingDocument = numbersV2RegulatoryComplianceSupportingDocument;
        return this;
    }
}