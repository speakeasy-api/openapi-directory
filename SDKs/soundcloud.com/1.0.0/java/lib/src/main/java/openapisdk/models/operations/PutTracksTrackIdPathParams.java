package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTracksTrackIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public PutTracksTrackIdPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}