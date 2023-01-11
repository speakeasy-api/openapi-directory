package openapisdk.models.operations;



public class CreateTextTrackAlt1Response {
    public String contentType;
    public CreateTextTrackAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateTextTrackAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public CreateTextTrackAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.TextTrack textTrack;
    public CreateTextTrackAlt1Response withTextTrack(openapisdk.models.shared.TextTrack textTrack) {
        this.textTrack = textTrack;
        return this;
    }
}