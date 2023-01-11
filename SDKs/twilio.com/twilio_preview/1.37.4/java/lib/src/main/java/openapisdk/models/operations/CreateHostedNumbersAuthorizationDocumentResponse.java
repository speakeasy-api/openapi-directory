package openapisdk.models.operations;



public class CreateHostedNumbersAuthorizationDocumentResponse {
    public String contentType;
    public CreateHostedNumbersAuthorizationDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateHostedNumbersAuthorizationDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument previewHostedNumbersAuthorizationDocument;
    public CreateHostedNumbersAuthorizationDocumentResponse withPreviewHostedNumbersAuthorizationDocument(openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument previewHostedNumbersAuthorizationDocument) {
        this.previewHostedNumbersAuthorizationDocument = previewHostedNumbersAuthorizationDocument;
        return this;
    }
}