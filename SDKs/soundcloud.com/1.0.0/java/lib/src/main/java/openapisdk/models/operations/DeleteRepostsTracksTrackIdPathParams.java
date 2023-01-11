package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRepostsTracksTrackIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public DeleteRepostsTracksTrackIdPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}