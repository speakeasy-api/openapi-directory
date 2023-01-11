package openapisdk.models.operations;



public class UpdateSyncMapPermissionResponse {
    public String contentType;
    public UpdateSyncMapPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSyncMapPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission syncV1ServiceSyncMapSyncMapPermission;
    public UpdateSyncMapPermissionResponse withSyncV1ServiceSyncMapSyncMapPermission(openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission syncV1ServiceSyncMapSyncMapPermission) {
        this.syncV1ServiceSyncMapSyncMapPermission = syncV1ServiceSyncMapSyncMapPermission;
        return this;
    }
}