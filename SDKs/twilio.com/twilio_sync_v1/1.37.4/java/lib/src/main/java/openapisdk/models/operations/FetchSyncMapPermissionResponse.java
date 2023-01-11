package openapisdk.models.operations;



public class FetchSyncMapPermissionResponse {
    public String contentType;
    public FetchSyncMapPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchSyncMapPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission syncV1ServiceSyncMapSyncMapPermission;
    public FetchSyncMapPermissionResponse withSyncV1ServiceSyncMapSyncMapPermission(openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission syncV1ServiceSyncMapSyncMapPermission) {
        this.syncV1ServiceSyncMapSyncMapPermission = syncV1ServiceSyncMapSyncMapPermission;
        return this;
    }
}