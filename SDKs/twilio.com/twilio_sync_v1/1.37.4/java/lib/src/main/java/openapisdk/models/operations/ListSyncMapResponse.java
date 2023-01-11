package openapisdk.models.operations;



public class ListSyncMapResponse {
    public String contentType;
    public ListSyncMapResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncMapListSyncMapResponse listSyncMapResponse;
    public ListSyncMapResponse withListSyncMapResponse(ListSyncMapListSyncMapResponse listSyncMapResponse) {
        this.listSyncMapResponse = listSyncMapResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncMapResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}