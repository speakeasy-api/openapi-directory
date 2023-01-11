package openapisdk.models.operations;



public class ListLogResponse {
    public String contentType;
    public ListLogResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListLogListLogResponse listLogResponse;
    public ListLogResponse withListLogResponse(ListLogListLogResponse listLogResponse) {
        this.listLogResponse = listLogResponse;
        return this;
    }
    public Long statusCode;
    public ListLogResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}