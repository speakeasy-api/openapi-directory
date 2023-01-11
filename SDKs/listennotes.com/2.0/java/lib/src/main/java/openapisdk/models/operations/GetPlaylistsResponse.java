package openapisdk.models.operations;



public class GetPlaylistsResponse {
    public String contentType;
    public GetPlaylistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPlaylistsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PlaylistsResponse playlistsResponse;
    public GetPlaylistsResponse withPlaylistsResponse(openapisdk.models.shared.PlaylistsResponse playlistsResponse) {
        this.playlistsResponse = playlistsResponse;
        return this;
    }
    public Long statusCode;
    public GetPlaylistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}