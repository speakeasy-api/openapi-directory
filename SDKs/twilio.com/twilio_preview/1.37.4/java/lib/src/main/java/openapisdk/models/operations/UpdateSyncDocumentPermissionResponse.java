package openapisdk.models.operations;



public class UpdateSyncDocumentPermissionResponse {
    public String contentType;
    public UpdateSyncDocumentPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncDocumentPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission previewSyncServiceDocumentDocumentPermission;
    public UpdateSyncDocumentPermissionResponse withPreviewSyncServiceDocumentDocumentPermission(openapisdk.models.shared.PreviewSyncServiceDocumentDocumentPermission previewSyncServiceDocumentDocumentPermission) {
        this.previewSyncServiceDocumentDocumentPermission = previewSyncServiceDocumentDocumentPermission;
        return this;
    }
}