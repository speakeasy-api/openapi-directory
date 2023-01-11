package openapisdk.models.operations;



public class UpdateSyncListPermissionResponse {
    public String contentType;
    public UpdateSyncListPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncListPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission syncV1ServiceSyncListSyncListPermission;
    public UpdateSyncListPermissionResponse withSyncV1ServiceSyncListSyncListPermission(openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission syncV1ServiceSyncListSyncListPermission) {
        this.syncV1ServiceSyncListSyncListPermission = syncV1ServiceSyncListSyncListPermission;
        return this;
    }
}