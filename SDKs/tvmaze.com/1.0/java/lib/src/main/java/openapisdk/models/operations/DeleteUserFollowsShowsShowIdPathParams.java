package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserFollowsShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public DeleteUserFollowsShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}