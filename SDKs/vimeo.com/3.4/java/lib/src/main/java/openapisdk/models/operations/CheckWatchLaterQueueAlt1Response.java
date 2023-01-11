package openapisdk.models.operations;



public class CheckWatchLaterQueueAlt1Response {
    public String contentType;
    public CheckWatchLaterQueueAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckWatchLaterQueueAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckWatchLaterQueueAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public CheckWatchLaterQueueAlt1Response withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}