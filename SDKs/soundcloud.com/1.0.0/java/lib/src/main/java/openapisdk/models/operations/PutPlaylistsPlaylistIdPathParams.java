package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutPlaylistsPlaylistIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public Long playlistId;
    public PutPlaylistsPlaylistIdPathParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}