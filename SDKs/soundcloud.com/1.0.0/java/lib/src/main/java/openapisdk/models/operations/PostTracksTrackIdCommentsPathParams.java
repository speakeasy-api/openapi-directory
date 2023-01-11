package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTracksTrackIdCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public PostTracksTrackIdCommentsPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}