package openapisdk.models.operations;



public class ListContentResponse {
    public String contentType;
    public ListContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListContentListContentResponse listContentResponse;
    public ListContentResponse withListContentResponse(ListContentListContentResponse listContentResponse) {
        this.listContentResponse = listContentResponse;
        return this;
    }
    public Long statusCode;
    public ListContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}