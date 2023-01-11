package openapisdk.models.operations;



public class UpdateSyncSyncMapPermissionResponse {
    public String contentType;
    public UpdateSyncSyncMapPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncSyncMapPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission previewSyncServiceSyncMapSyncMapPermission;
    public UpdateSyncSyncMapPermissionResponse withPreviewSyncServiceSyncMapSyncMapPermission(openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission previewSyncServiceSyncMapSyncMapPermission) {
        this.previewSyncServiceSyncMapSyncMapPermission = previewSyncServiceSyncMapSyncMapPermission;
        return this;
    }
}