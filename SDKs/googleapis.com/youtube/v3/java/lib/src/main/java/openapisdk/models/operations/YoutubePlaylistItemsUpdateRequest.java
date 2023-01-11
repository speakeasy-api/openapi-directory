package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubePlaylistItemsUpdateRequest {
    public YoutubePlaylistItemsUpdateQueryParams queryParams;
    public YoutubePlaylistItemsUpdateRequest withQueryParams(YoutubePlaylistItemsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlaylistItem request;
    public YoutubePlaylistItemsUpdateRequest withRequest(openapisdk.models.shared.PlaylistItem request) {
        this.request = request;
        return this;
    }
    public YoutubePlaylistItemsUpdateSecurity security;
    public YoutubePlaylistItemsUpdateRequest withSecurity(YoutubePlaylistItemsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}