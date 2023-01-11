package openapisdk.models.operations;



public class AddVideoToVodResponse {
    public String contentType;
    public AddVideoToVodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddVideoToVodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public AddVideoToVodResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.OnDemandVideo onDemandVideo;
    public AddVideoToVodResponse withOnDemandVideo(openapisdk.models.shared.OnDemandVideo onDemandVideo) {
        this.onDemandVideo = onDemandVideo;
        return this;
    }
}