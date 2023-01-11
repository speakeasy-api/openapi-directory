package openapisdk.models.operations;



public class CheckIfUserOwnsVideoAlt1Response {
    public String contentType;
    public CheckIfUserOwnsVideoAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckIfUserOwnsVideoAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckIfUserOwnsVideoAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public CheckIfUserOwnsVideoAlt1Response withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}