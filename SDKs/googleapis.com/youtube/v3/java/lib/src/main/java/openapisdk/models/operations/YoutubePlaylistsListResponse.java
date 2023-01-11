package openapisdk.models.operations;



public class YoutubePlaylistsListResponse {
    public String contentType;
    public YoutubePlaylistsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlaylistListResponse playlistListResponse;
    public YoutubePlaylistsListResponse withPlaylistListResponse(openapisdk.models.shared.PlaylistListResponse playlistListResponse) {
        this.playlistListResponse = playlistListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubePlaylistsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}