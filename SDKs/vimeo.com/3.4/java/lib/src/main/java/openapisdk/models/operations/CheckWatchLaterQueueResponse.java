package openapisdk.models.operations;



public class CheckWatchLaterQueueResponse {
    public String contentType;
    public CheckWatchLaterQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckWatchLaterQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckWatchLaterQueueResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public CheckWatchLaterQueueResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}