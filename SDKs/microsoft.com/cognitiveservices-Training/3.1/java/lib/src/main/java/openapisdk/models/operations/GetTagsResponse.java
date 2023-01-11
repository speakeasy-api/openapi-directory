package openapisdk.models.operations;



public class GetTagsResponse {
    public byte[] body;
    public GetTagsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CustomVisionError customVisionError;
    public GetTagsResponse withCustomVisionError(openapisdk.models.shared.CustomVisionError customVisionError) {
        this.customVisionError = customVisionError;
        return this;
    }
    public Long statusCode;
    public GetTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag[] tags;
    public GetTagsResponse withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}