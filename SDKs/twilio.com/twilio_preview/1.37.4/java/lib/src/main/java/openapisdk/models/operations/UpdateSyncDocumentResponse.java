package openapisdk.models.operations;



public class UpdateSyncDocumentResponse {
    public String contentType;
    public UpdateSyncDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceDocument previewSyncServiceDocument;
    public UpdateSyncDocumentResponse withPreviewSyncServiceDocument(openapisdk.models.shared.PreviewSyncServiceDocument previewSyncServiceDocument) {
        this.previewSyncServiceDocument = previewSyncServiceDocument;
        return this;
    }
}