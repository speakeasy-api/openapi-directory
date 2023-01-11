package openapisdk.models.operations;



public class ListSyncMapPermissionResponse {
    public String contentType;
    public ListSyncMapPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncMapPermissionListSyncMapPermissionResponse listSyncMapPermissionResponse;
    public ListSyncMapPermissionResponse withListSyncMapPermissionResponse(ListSyncMapPermissionListSyncMapPermissionResponse listSyncMapPermissionResponse) {
        this.listSyncMapPermissionResponse = listSyncMapPermissionResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncMapPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}