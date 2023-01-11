package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckIfUserFollowsPlaylistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointCheckIfUserFollowsPlaylistPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}