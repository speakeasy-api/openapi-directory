package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdRelatedPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public GetTracksTrackIdRelatedPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}