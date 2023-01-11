package openapisdk.models.operations;



public class ListTaskQueueResponse {
    public String contentType;
    public ListTaskQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListTaskQueueListTaskQueueResponse listTaskQueueResponse;
    public ListTaskQueueResponse withListTaskQueueResponse(ListTaskQueueListTaskQueueResponse listTaskQueueResponse) {
        this.listTaskQueueResponse = listTaskQueueResponse;
        return this;
    }
    public Long statusCode;
    public ListTaskQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}