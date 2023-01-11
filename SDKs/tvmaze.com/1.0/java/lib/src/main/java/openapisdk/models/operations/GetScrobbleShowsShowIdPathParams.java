package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScrobbleShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public GetScrobbleShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}