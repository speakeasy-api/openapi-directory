package openapisdk.models.operations;



public class GetPlaylistByIdResponse {
    public String contentType;
    public GetPlaylistByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPlaylistByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PlaylistResponse playlistResponse;
    public GetPlaylistByIdResponse withPlaylistResponse(openapisdk.models.shared.PlaylistResponse playlistResponse) {
        this.playlistResponse = playlistResponse;
        return this;
    }
    public Long statusCode;
    public GetPlaylistByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}