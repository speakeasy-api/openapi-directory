package openapisdk.models.operations;



public class GetTextTracksResponse {
    public String contentType;
    public GetTextTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTextTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetTextTracksResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.TextTrack[] textTracks;
    public GetTextTracksResponse withTextTracks(openapisdk.models.shared.TextTrack[] textTracks) {
        this.textTracks = textTracks;
        return this;
    }
}