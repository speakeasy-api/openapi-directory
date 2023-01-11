package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMePlaylistsPlaylistIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=playlist_id")
    public Long playlistId;
    public GetMePlaylistsPlaylistIdPathParams withPlaylistId(Long playlistId) {
        this.playlistId = playlistId;
        return this;
    }
}