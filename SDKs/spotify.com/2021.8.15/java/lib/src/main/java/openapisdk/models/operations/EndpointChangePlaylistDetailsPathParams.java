package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointChangePlaylistDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointChangePlaylistDetailsPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}