package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRepostsTracksTrackIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public PostRepostsTracksTrackIdPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}