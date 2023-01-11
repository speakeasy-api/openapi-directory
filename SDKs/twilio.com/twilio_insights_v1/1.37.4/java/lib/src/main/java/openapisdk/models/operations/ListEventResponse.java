package openapisdk.models.operations;



public class ListEventResponse {
    public String contentType;
    public ListEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListEventListEventResponse listEventResponse;
    public ListEventResponse withListEventResponse(ListEventListEventResponse listEventResponse) {
        this.listEventResponse = listEventResponse;
        return this;
    }
    public Long statusCode;
    public ListEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}