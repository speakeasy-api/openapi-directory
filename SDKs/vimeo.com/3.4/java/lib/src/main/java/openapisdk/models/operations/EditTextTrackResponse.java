package openapisdk.models.operations;



public class EditTextTrackResponse {
    public String contentType;
    public EditTextTrackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditTextTrackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public EditTextTrackResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.TextTrack textTrack;
    public EditTextTrackResponse withTextTrack(openapisdk.models.shared.TextTrack textTrack) {
        this.textTrack = textTrack;
        return this;
    }
}