package openapisdk.models.operations;



public class UpdateHostedNumbersAuthorizationDocumentResponse {
    public String contentType;
    public UpdateHostedNumbersAuthorizationDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateHostedNumbersAuthorizationDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument previewHostedNumbersAuthorizationDocument;
    public UpdateHostedNumbersAuthorizationDocumentResponse withPreviewHostedNumbersAuthorizationDocument(openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument previewHostedNumbersAuthorizationDocument) {
        this.previewHostedNumbersAuthorizationDocument = previewHostedNumbersAuthorizationDocument;
        return this;
    }
}