package openapisdk.models.operations;



public class UpdateSyncSyncListPermissionResponse {
    public String contentType;
    public UpdateSyncSyncListPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncSyncListPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission previewSyncServiceSyncListSyncListPermission;
    public UpdateSyncSyncListPermissionResponse withPreviewSyncServiceSyncListSyncListPermission(openapisdk.models.shared.PreviewSyncServiceSyncListSyncListPermission previewSyncServiceSyncListSyncListPermission) {
        this.previewSyncServiceSyncListSyncListPermission = previewSyncServiceSyncListSyncListPermission;
        return this;
    }
}