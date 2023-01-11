package openapisdk.models.operations;



public class GetTextTrackResponse {
    public String contentType;
    public GetTextTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTextTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetTextTrackResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetTextTrackResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.TextTrack textTrack;
    public GetTextTrackResponse withTextTrack(openapisdk.models.shared.TextTrack textTrack) {
        this.textTrack = textTrack;
        return this;
    }
}