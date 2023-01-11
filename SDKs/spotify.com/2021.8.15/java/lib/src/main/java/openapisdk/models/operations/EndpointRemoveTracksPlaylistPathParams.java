package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveTracksPlaylistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointRemoveTracksPlaylistPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}