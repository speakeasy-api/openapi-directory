package openapisdk.models.operations;



public class ListSyncListItemResponse {
    public String contentType;
    public ListSyncListItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncListItemListSyncListItemResponse listSyncListItemResponse;
    public ListSyncListItemResponse withListSyncListItemResponse(ListSyncListItemListSyncListItemResponse listSyncListItemResponse) {
        this.listSyncListItemResponse = listSyncListItemResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncListItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}