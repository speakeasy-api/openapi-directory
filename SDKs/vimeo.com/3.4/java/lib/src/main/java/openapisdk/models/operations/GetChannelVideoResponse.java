package openapisdk.models.operations;



public class GetChannelVideoResponse {
    public String contentType;
    public GetChannelVideoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelVideoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetChannelVideoResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public GetChannelVideoResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}