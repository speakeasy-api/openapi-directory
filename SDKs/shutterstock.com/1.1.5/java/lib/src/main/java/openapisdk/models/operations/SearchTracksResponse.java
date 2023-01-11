package openapisdk.models.operations;



public class SearchTracksResponse {
    public openapisdk.models.shared.AudioSearchResults audioSearchResults;
    public SearchTracksResponse withAudioSearchResults(openapisdk.models.shared.AudioSearchResults audioSearchResults) {
        this.audioSearchResults = audioSearchResults;
        return this;
    }
    public String contentType;
    public SearchTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SearchTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}