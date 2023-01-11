package openapisdk.models.operations;



public class FetchSyncSyncListPermissionResponse {
    public String contentType;
    public FetchSyncSyncListPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncSyncListPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission previewSyncServiceSyncListSyncListPermission;
    public FetchSyncSyncListPermissionResponse withPreviewSyncServiceSyncListSyncListPermission(openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission previewSyncServiceSyncListSyncListPermission) {
        this.previewSyncServiceSyncListSyncListPermission = previewSyncServiceSyncListSyncListPermission;
        return this;
    }
}