package openapisdk.models.operations;



public class ListSyncListResponse {
    public String contentType;
    public ListSyncListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncListListSyncListResponse listSyncListResponse;
    public ListSyncListResponse withListSyncListResponse(ListSyncListListSyncListResponse listSyncListResponse) {
        this.listSyncListResponse = listSyncListResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}