package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetPlaylistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointGetPlaylistPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}