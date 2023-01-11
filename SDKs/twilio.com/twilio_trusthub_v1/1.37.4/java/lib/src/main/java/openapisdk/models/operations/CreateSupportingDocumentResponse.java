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
    public openapisdk.models.shared.TrusthubV1SupportingDocument trusthubV1SupportingDocument;
    public CreateSupportingDocumentResponse withTrusthubV1SupportingDocument(openapisdk.models.shared.TrusthubV1SupportingDocument trusthubV1SupportingDocument) {
        this.trusthubV1SupportingDocument = trusthubV1SupportingDocument;
        return this;
    }
}