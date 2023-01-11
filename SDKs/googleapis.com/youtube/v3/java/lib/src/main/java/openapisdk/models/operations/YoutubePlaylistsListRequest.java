package openapisdk.models.operations;



public class YoutubePlaylistsListRequest {
    public YoutubePlaylistsListQueryParams queryParams;
    public YoutubePlaylistsListRequest withQueryParams(YoutubePlaylistsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public YoutubePlaylistsListSecurity security;
    public YoutubePlaylistsListRequest withSecurity(YoutubePlaylistsListSecurity security) {
        this.security = security;
        return this;
    }
}