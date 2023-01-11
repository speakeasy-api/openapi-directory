package openapisdk.models.operations;



public class FetchHostedNumbersAuthorizationDocumentResponse {
    public String contentType;
    public FetchHostedNumbersAuthorizationDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchHostedNumbersAuthorizationDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument previewHostedNumbersAuthorizationDocument;
    public FetchHostedNumbersAuthorizationDocumentResponse withPreviewHostedNumbersAuthorizationDocument(openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument previewHostedNumbersAuthorizationDocument) {
        this.previewHostedNumbersAuthorizationDocument = previewHostedNumbersAuthorizationDocument;
        return this;
    }
}