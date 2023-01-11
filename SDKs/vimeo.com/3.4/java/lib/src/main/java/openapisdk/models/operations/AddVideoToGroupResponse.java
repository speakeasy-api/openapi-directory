package openapisdk.models.operations;



public class AddVideoToGroupResponse {
    public String contentType;
    public AddVideoToGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoToGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVideoToGroupResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Video video;
    public AddVideoToGroupResponse withVideo(openapisdk.models.shared.Video video) {
        this.video = video;
        return this;
    }
}