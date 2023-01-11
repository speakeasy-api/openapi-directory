package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubePlaylistsUpdateRequest {
    public YoutubePlaylistsUpdateQueryParams queryParams;
    public YoutubePlaylistsUpdateRequest withQueryParams(YoutubePlaylistsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Playlist request;
    public YoutubePlaylistsUpdateRequest withRequest(openapisdk.models.shared.Playlist request) {
        this.request = request;
        return this;
    }
    public YoutubePlaylistsUpdateSecurity security;
    public YoutubePlaylistsUpdateRequest withSecurity(YoutubePlaylistsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}