package openapisdk.models.operations;



public class ListUnderstandQueryResponse {
    public String contentType;
    public ListUnderstandQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListUnderstandQueryListUnderstandQueryResponse listUnderstandQueryResponse;
    public ListUnderstandQueryResponse withListUnderstandQueryResponse(ListUnderstandQueryListUnderstandQueryResponse listUnderstandQueryResponse) {
        this.listUnderstandQueryResponse = listUnderstandQueryResponse;
        return this;
    }
    public Long statusCode;
    public ListUnderstandQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}