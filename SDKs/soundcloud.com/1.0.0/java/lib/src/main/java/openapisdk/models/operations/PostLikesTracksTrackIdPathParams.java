package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLikesTracksTrackIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public PostLikesTracksTrackIdPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}