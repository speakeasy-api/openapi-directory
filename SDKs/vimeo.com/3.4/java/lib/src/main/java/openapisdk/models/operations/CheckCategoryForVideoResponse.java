package openapisdk.models.operations;



public class CheckCategoryForVideoResponse {
    public String contentType;
    public CheckCategoryForVideoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckCategoryForVideoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CheckCategoryForVideoResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public CheckCategoryForVideoResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}