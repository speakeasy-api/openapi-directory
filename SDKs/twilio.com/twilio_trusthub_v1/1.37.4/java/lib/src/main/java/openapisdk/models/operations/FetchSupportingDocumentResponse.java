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
    public openapisdk.models.shared.TrusthubV1SupportingDocument trusthubV1SupportingDocument;
    public FetchSupportingDocumentResponse withTrusthubV1SupportingDocument(openapisdk.models.shared.TrusthubV1SupportingDocument trusthubV1SupportingDocument) {
        this.trusthubV1SupportingDocument = trusthubV1SupportingDocument;
        return this;
    }
}