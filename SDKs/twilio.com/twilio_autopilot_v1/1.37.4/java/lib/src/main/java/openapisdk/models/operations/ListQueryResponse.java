package openapisdk.models.operations;



public class ListQueryResponse {
    public String contentType;
    public ListQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListQueryListQueryResponse listQueryResponse;
    public ListQueryResponse withListQueryResponse(ListQueryListQueryResponse listQueryResponse) {
        this.listQueryResponse = listQueryResponse;
        return this;
    }
    public Long statusCode;
    public ListQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}