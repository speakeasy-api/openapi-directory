package openapisdk.models.operations;



public class ListActivityResponse {
    public String contentType;
    public ListActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListActivityListActivityResponse listActivityResponse;
    public ListActivityResponse withListActivityResponse(ListActivityListActivityResponse listActivityResponse) {
        this.listActivityResponse = listActivityResponse;
        return this;
    }
    public Long statusCode;
    public ListActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}