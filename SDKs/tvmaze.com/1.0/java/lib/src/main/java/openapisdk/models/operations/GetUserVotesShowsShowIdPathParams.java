package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserVotesShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public GetUserVotesShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}