package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsPlaylistIdRepostersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public Long playlistId;
    public GetPlaylistsPlaylistIdRepostersPathParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}