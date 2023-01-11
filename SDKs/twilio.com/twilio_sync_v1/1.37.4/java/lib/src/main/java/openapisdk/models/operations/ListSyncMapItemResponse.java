package openapisdk.models.operations;



public class ListSyncMapItemResponse {
    public String contentType;
    public ListSyncMapItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncMapItemListSyncMapItemResponse listSyncMapItemResponse;
    public ListSyncMapItemResponse withListSyncMapItemResponse(ListSyncMapItemListSyncMapItemResponse listSyncMapItemResponse) {
        this.listSyncMapItemResponse = listSyncMapItemResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncMapItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}