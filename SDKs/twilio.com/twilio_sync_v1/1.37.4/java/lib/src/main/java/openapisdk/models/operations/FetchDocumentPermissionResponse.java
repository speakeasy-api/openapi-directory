package openapisdk.models.operations;



public class FetchDocumentPermissionResponse {
    public String contentType;
    public FetchDocumentPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchDocumentPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission syncV1ServiceDocumentDocumentPermission;
    public FetchDocumentPermissionResponse withSyncV1ServiceDocumentDocumentPermission(openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission syncV1ServiceDocumentDocumentPermission) {
        this.syncV1ServiceDocumentDocumentPermission = syncV1ServiceDocumentDocumentPermission;
        return this;
    }
}