package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointUploadCustomPlaylistCoverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public String playlistId;
    public EndpointUploadCustomPlaylistCoverPathParams withPlaylistId(String playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}