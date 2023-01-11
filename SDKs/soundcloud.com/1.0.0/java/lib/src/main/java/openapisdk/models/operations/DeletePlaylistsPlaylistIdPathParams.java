package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePlaylistsPlaylistIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public Long playlistId;
    public DeletePlaylistsPlaylistIdPathParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}