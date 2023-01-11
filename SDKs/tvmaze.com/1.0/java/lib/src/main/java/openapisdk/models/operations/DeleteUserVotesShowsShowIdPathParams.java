package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserVotesShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public DeleteUserVotesShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}