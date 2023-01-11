package openapisdk.models.operations;



public class GetMePlaylistsResponse {
    public String contentType;
    public GetMePlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetMePlaylistsResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.Playlist[] playlistsArray;
    public GetMePlaylistsResponse withPlaylistsArray(openapisdk.models.shared.Playlist[] playlistsArray) {
        this.playlistsArray = playlistsArray;
        return this;
    }
    public Long statusCode;
    public GetMePlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}