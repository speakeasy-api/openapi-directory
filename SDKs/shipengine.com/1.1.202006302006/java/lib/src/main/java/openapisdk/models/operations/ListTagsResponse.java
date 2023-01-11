package openapisdk.models.operations;



public class ListTagsResponse {
    public String contentType;
    public ListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ErrorResponseBody errorResponseBody;
    public ListTagsResponse withErrorResponseBody(openapisdk.models.shared.ErrorResponseBody errorResponseBody) {
        this.errorResponseBody = errorResponseBody;
        return this;
    }
    public openapisdk.models.shared.ListTagsResponseBody listTagsResponseBody;
    public ListTagsResponse withListTagsResponseBody(openapisdk.models.shared.ListTagsResponseBody listTagsResponseBody) {
        this.listTagsResponseBody = listTagsResponseBody;
        return this;
    }
}