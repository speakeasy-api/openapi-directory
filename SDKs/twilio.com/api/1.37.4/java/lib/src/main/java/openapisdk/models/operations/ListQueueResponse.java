package openapisdk.models.operations;



public class ListQueueResponse {
    public String contentType;
    public ListQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListQueueListQueueResponse listQueueResponse;
    public ListQueueResponse withListQueueResponse(ListQueueListQueueResponse listQueueResponse) {
        this.listQueueResponse = listQueueResponse;
        return this;
    }
    public Long statusCode;
    public ListQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}