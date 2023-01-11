package openapisdk.models.operations;



public class ListEventTypeResponse {
    public String contentType;
    public ListEventTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListEventTypeListEventTypeResponse listEventTypeResponse;
    public ListEventTypeResponse withListEventTypeResponse(ListEventTypeListEventTypeResponse listEventTypeResponse) {
        this.listEventTypeResponse = listEventTypeResponse;
        return this;
    }
    public Long statusCode;
    public ListEventTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}