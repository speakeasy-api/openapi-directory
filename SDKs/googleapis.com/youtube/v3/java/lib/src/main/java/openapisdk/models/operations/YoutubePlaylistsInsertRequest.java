package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubePlaylistsInsertRequest {
    public YoutubePlaylistsInsertQueryParams queryParams;
    public YoutubePlaylistsInsertRequest withQueryParams(YoutubePlaylistsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Playlist request;
    public YoutubePlaylistsInsertRequest withRequest(openapisdk.models.shared.Playlist request) {
        this.request = request;
        return this;
    }
    public YoutubePlaylistsInsertSecurity security;
    public YoutubePlaylistsInsertRequest withSecurity(YoutubePlaylistsInsertSecurity security) {
        this.security = security;
        return this;
    }
}