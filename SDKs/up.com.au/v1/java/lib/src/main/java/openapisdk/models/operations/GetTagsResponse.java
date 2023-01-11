package openapisdk.models.operations;



public class GetTagsResponse {
    public String contentType;
    public GetTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListTagsResponse listTagsResponse;
    public GetTagsResponse withListTagsResponse(openapisdk.models.shared.ListTagsResponse listTagsResponse) {
        this.listTagsResponse = listTagsResponse;
        return this;
    }
    public Long statusCode;
    public GetTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}