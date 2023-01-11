package openapisdk.models.operations;



public class ListCallEventResponse {
    public String contentType;
    public ListCallEventResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListCallEventListCallEventResponse listCallEventResponse;
    public ListCallEventResponse withListCallEventResponse(ListCallEventListCallEventResponse listCallEventResponse) {
        this.listCallEventResponse = listCallEventResponse;
        return this;
    }
    public Long statusCode;
    public ListCallEventResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}