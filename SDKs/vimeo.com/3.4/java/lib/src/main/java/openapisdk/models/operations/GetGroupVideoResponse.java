package openapisdk.models.operations;



public class GetGroupVideoResponse {
    public String contentType;
    public GetGroupVideoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGroupVideoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetGroupVideoResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public GetGroupVideoResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}