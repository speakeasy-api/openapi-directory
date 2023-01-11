package openapisdk.models.operations;



public class ListSimResponse {
    public String contentType;
    public ListSimResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListSimListSimResponse listSimResponse;
    public ListSimResponse withListSimResponse(ListSimListSimResponse listSimResponse) {
        this.listSimResponse = listSimResponse;
        return this;
    }
    public Long statusCode;
    public ListSimResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}