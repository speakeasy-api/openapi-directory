package openapisdk.models.operations;



public class UpdateSupportingDocumentResponse {
    public String contentType;
    public UpdateSupportingDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSupportingDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument;
    public UpdateSupportingDocumentResponse withNumbersV2RegulatoryComplianceSupportingDocument(openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument numbersV2RegulatoryComplianceSupportingDocument) {
        this.numbersV2RegulatoryComplianceSupportingDocument = numbersV2RegulatoryComplianceSupportingDocument;
        return this;
    }
}