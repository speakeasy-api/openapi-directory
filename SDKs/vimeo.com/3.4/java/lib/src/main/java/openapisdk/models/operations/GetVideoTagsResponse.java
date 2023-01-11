package openapisdk.models.operations;



public class GetVideoTagsResponse {
    public String contentType;
    public GetVideoTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVideoTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag[] tags;
    public GetVideoTagsResponse withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}