package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepostsPlaylistsPlaylistIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public Long playlistId;
    public PostRepostsPlaylistsPlaylistIdPathParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}