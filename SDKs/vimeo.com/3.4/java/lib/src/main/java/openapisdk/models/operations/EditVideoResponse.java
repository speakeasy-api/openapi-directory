package openapisdk.models.operations;



public class EditVideoResponse {
    public String contentType;
    public EditVideoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditVideoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public EditVideoResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public EditVideoResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}