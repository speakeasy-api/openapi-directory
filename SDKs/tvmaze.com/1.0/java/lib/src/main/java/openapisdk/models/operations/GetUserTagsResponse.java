package openapisdk.models.operations;



public class GetUserTagsResponse {
    public String contentType;
    public GetUserTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag[] tags;
    public GetUserTagsResponse withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}