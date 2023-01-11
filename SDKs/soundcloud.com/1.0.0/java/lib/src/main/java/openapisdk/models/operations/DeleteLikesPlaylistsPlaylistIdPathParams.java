package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLikesPlaylistsPlaylistIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public Long playlistId;
    public DeleteLikesPlaylistsPlaylistIdPathParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}