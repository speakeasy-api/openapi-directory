package openapisdk.models.operations;



public class ListSyncStreamResponse {
    public String contentType;
    public ListSyncStreamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSyncStreamListSyncStreamResponse listSyncStreamResponse;
    public ListSyncStreamResponse withListSyncStreamResponse(ListSyncStreamListSyncStreamResponse listSyncStreamResponse) {
        this.listSyncStreamResponse = listSyncStreamResponse;
        return this;
    }
    public Long statusCode;
    public ListSyncStreamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}