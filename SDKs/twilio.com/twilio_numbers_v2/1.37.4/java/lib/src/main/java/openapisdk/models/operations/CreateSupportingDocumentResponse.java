package openapisdk.models.operations;



public class CreateSupportingDocumentResponse {
    public String contentType;
    public CreateSupportingDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSupportingDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument;
    public CreateSupportingDocumentResponse withNumbersV2RegulatoryComplianceSupportingDocument(openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument) {
        this.numbersV2RegulatoryComplianceSupportingDocument = numbersV2RegulatoryComplianceSupportingDocument;
        return this;
    }
}