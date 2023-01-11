package openapisdk.models.operations;



public class ListConnectAppResponse {
    public String contentType;
    public ListConnectAppResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListConnectAppListConnectAppResponse listConnectAppResponse;
    public ListConnectAppResponse withListConnectAppResponse(ListConnectAppListConnectAppResponse listConnectAppResponse) {
        this.listConnectAppResponse = listConnectAppResponse;
        return this;
    }
    public Long statusCode;
    public ListConnectAppResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}