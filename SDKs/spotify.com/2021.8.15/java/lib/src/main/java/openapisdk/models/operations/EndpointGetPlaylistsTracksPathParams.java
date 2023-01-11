package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetPlaylistsTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointGetPlaylistsTracksPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}