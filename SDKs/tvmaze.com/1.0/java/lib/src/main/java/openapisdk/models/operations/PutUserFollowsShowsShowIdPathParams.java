package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserFollowsShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public PutUserFollowsShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}