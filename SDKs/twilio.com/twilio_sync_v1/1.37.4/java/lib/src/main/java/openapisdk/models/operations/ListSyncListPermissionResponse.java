package openapisdk.models.operations;



public class ListSyncListPermissionResponse {
    public String contentType;
    public ListSyncListPermissionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncListPermissionListSyncListPermissionResponse listSyncListPermissionResponse;
    public ListSyncListPermissionResponse withListSyncListPermissionResponse(ListSyncListPermissionListSyncListPermissionResponse listSyncListPermissionResponse) {
        this.listSyncListPermissionResponse = listSyncListPermissionResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncListPermissionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}