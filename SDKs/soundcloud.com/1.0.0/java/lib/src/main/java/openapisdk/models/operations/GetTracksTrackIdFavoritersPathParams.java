package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdFavoritersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=track_id")
    public Long trackId;
    public GetTracksTrackIdFavoritersPathParams withTrackId(Long trackId) {
        this.trackId = trackId;
        return this;
    }
}