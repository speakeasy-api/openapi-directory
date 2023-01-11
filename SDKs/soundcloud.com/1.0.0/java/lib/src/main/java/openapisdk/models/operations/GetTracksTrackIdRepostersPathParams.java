package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdRepostersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public GetTracksTrackIdRepostersPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}