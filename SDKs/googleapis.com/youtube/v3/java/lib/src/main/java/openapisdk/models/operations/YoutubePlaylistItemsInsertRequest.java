package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubePlaylistItemsInsertRequest {
    public YoutubePlaylistItemsInsertQueryParams queryParams;
    public YoutubePlaylistItemsInsertRequest withQueryParams(YoutubePlaylistItemsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PlaylistItem request;
    public YoutubePlaylistItemsInsertRequest withRequest(openapisdk.models.shared.PlaylistItem request) {
        this.request = request;
        return this;
    }
    public YoutubePlaylistItemsInsertSecurity security;
    public YoutubePlaylistItemsInsertRequest withSecurity(YoutubePlaylistItemsInsertSecurity security) {
        this.security = security;
        return this;
    }
}