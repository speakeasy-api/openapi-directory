package openapisdk.models.operations;



public class UpdateDocumentPermissionResponse {
    public String contentType;
    public UpdateDocumentPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateDocumentPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission syncV1ServiceDocumentDocumentPermission;
    public UpdateDocumentPermissionResponse withSyncV1ServiceDocumentDocumentPermission(openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission syncV1ServiceDocumentDocumentPermission) {
        this.syncV1ServiceDocumentDocumentPermission = syncV1ServiceDocumentDocumentPermission;
        return this;
    }
}