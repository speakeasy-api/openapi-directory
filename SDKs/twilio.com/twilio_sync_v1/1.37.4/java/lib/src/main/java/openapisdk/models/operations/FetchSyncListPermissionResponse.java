package openapisdk.models.operations;



public class FetchSyncListPermissionResponse {
    public String contentType;
    public FetchSyncListPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncListPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission syncV1ServiceSyncListSyncListPermission;
    public FetchSyncListPermissionResponse withSyncV1ServiceSyncListSyncListPermission(openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission syncV1ServiceSyncListSyncListPermission) {
        this.syncV1ServiceSyncListSyncListPermission = syncV1ServiceSyncListSyncListPermission;
        return this;
    }
}