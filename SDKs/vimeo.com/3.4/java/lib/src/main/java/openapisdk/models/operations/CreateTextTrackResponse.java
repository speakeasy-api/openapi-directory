package openapisdk.models.operations;



public class CreateTextTrackResponse {
    public String contentType;
    public CreateTextTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTextTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CreateTextTrackResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.TextTrack textTrack;
    public CreateTextTrackResponse withTextTrack(openapisdk.models.shared.TextTrack textTrack) {
        this.textTrack = textTrack;
        return this;
    }
}