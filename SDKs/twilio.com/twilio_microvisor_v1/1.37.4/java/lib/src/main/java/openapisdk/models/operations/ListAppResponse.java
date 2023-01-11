package openapisdk.models.operations;



public class ListAppResponse {
    public String contentType;
    public ListAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListAppListAppResponse listAppResponse;
    public ListAppResponse withListAppResponse(ListAppListAppResponse listAppResponse) {
        this.listAppResponse = listAppResponse;
        return this;
    }
    public Long statusCode;
    public ListAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}