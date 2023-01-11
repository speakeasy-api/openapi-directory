package openapisdk.models.operations;



public class YoutubePlaylistsDeleteRequest {
    public YoutubePlaylistsDeleteQueryParams queryParams;
    public YoutubePlaylistsDeleteRequest withQueryParams(YoutubePlaylistsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubePlaylistsDeleteSecurity security;
    public YoutubePlaylistsDeleteRequest withSecurity(YoutubePlaylistsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}