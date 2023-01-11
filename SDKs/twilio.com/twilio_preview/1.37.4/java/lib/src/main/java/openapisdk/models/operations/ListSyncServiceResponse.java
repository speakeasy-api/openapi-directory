package openapisdk.models.operations;



public class ListSyncServiceResponse {
    public String contentType;
    public ListSyncServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncServiceListSyncServiceResponse listSyncServiceResponse;
    public ListSyncServiceResponse withListSyncServiceResponse(ListSyncServiceListSyncServiceResponse listSyncServiceResponse) {
        this.listSyncServiceResponse = listSyncServiceResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}