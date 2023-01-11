package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetPlaylistCoverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointGetPlaylistCoverPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}