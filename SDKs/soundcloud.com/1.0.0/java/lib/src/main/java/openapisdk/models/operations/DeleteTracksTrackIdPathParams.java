package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTracksTrackIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public DeleteTracksTrackIdPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}