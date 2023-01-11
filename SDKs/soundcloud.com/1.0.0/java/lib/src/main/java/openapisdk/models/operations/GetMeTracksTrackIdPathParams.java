package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMeTracksTrackIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public GetMeTracksTrackIdPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}