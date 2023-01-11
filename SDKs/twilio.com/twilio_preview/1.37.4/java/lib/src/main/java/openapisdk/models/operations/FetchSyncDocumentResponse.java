package openapisdk.models.operations;



public class FetchSyncDocumentResponse {
    public String contentType;
    public FetchSyncDocumentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncDocumentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceDocument previewSyncServiceDocument;
    public FetchSyncDocumentResponse withPreviewSyncServiceDocument(openapisdk.models.shared.PreviewSyncServiceDocument previewSyncServiceDocument) {
        this.previewSyncServiceDocument = previewSyncServiceDocument;
        return this;
    }
}