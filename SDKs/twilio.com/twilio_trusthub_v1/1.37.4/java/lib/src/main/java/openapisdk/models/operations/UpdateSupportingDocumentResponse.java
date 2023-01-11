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
    public openapisdk.models.shared.TrusthubV1SupportingDocument trusthubV1SupportingDocument;
    public UpdateSupportingDocumentResponse withTrusthubV1SupportingDocument(openapisdk.models.shared.TrusthubV1SupportingDocument trusthubV1SupportingDocument) {
        this.trusthubV1SupportingDocument = trusthubV1SupportingDocument;
        return this;
    }
}