package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserVotesShowsShowIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=show_id")
    public Long showId;
    public PutUserVotesShowsShowIdPathParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}