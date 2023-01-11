package openapisdk.models.operations;



public class ListApplicationResponse {
    public String contentType;
    public ListApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListApplicationListApplicationResponse listApplicationResponse;
    public ListApplicationResponse withListApplicationResponse(ListApplicationListApplicationResponse listApplicationResponse) {
        this.listApplicationResponse = listApplicationResponse;
        return this;
    }
    public Long statusCode;
    public ListApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}