package openapisdk.models.operations;



public class GetTextTracksAlt1Response {
    public String contentType;
    public GetTextTracksAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTextTracksAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetTextTracksAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.TextTrack[] textTracks;
    public GetTextTracksAlt1Response withTextTracks(openapisdk.models.shared.TextTrack[] textTracks) {
        this.textTracks = textTracks;
        return this;
    }
}