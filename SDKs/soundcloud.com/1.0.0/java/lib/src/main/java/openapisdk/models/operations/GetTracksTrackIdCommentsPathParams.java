package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdCommentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public GetTracksTrackIdCommentsPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}