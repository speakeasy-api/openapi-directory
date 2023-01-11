package openapisdk.models.operations;



public class ListShortCodeResponse {
    public String contentType;
    public ListShortCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ListShortCodeListShortCodeResponse listShortCodeResponse;
    public ListShortCodeResponse withListShortCodeResponse(ListShortCodeListShortCodeResponse listShortCodeResponse) {
        this.listShortCodeResponse = listShortCodeResponse;
        return this;
    }
    public Long statusCode;
    public ListShortCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}