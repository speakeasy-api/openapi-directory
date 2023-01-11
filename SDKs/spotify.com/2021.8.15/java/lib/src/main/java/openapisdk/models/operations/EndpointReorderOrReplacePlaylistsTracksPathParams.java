package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointReorderOrReplacePlaylistsTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointReorderOrReplacePlaylistsTracksPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}