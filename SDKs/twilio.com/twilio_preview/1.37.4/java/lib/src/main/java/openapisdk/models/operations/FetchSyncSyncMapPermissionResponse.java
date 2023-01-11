package openapisdk.models.operations;



public class FetchSyncSyncMapPermissionResponse {
    public String contentType;
    public FetchSyncSyncMapPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncSyncMapPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission previewSyncServiceSyncMapSyncMapPermission;
    public FetchSyncSyncMapPermissionResponse withPreviewSyncServiceSyncMapSyncMapPermission(openapisdk.models.shared.PreviewSyncServiceSyncMapSyncMapPermission previewSyncServiceSyncMapSyncMapPermission) {
        this.previewSyncServiceSyncMapSyncMapPermission = previewSyncServiceSyncMapSyncMapPermission;
        return this;
    }
}