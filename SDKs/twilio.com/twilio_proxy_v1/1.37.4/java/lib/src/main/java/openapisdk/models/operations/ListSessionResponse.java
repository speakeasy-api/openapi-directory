package openapisdk.models.operations;



public class ListSessionResponse {
    public String contentType;
    public ListSessionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSessionListSessionResponse listSessionResponse;
    public ListSessionResponse withListSessionResponse(ListSessionListSessionResponse listSessionResponse) {
        this.listSessionResponse = listSessionResponse;
        return this;
    }
    public Long statusCode;
    public ListSessionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}