package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsPlaylistIdTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public Long playlistId;
    public GetPlaylistsPlaylistIdTracksPathParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}