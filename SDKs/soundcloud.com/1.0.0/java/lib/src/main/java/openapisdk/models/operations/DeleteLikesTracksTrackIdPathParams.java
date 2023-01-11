package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLikesTracksTrackIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public DeleteLikesTracksTrackIdPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}