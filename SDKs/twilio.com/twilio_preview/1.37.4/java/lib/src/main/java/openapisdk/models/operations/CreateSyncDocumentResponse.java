package openapisdk.models.operations;



public class CreateSyncDocumentResponse {
    public String contentType;
    public CreateSyncDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateSyncDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceDocument previewSyncServiceDocument;
    public CreateSyncDocumentResponse withPreviewSyncServiceDocument(openapisdk.models.shared.PreviewSyncServiceDocument previewSyncServiceDocument) {
        this.previewSyncServiceDocument = previewSyncServiceDocument;
        return this;
    }
}