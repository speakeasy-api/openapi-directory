package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public GetUserFollowsShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}