package openapisdk.models.operations;



public class FetchSyncDocumentPermissionResponse {
    public String contentType;
    public FetchSyncDocumentPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncDocumentPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission previewSyncServiceDocumentDocumentPermission;
    public FetchSyncDocumentPermissionResponse withPreviewSyncServiceDocumentDocumentPermission(openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission previewSyncServiceDocumentDocumentPermission) {
        this.previewSyncServiceDocumentDocumentPermission = previewSyncServiceDocumentDocumentPermission;
        return this;
    }
}