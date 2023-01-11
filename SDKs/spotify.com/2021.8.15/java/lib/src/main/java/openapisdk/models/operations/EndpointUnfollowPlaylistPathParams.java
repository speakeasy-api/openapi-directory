package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointUnfollowPlaylistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointUnfollowPlaylistPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}