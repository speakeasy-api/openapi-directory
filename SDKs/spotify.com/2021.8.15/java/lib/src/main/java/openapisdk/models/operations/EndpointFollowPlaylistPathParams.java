package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointFollowPlaylistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointFollowPlaylistPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}