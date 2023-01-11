package openapisdk.models.operations;



public class GetChannelTagsResponse {
    public String contentType;
    public GetChannelTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetChannelTagsResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Tag[] tags;
    public GetChannelTagsResponse withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}