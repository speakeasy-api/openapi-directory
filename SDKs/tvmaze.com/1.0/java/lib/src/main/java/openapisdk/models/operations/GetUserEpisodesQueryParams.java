package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserEpisodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=show_id")
    public Long showId;
    public GetUserEpisodesQueryParams withShowId(Long showId) {
        this.showId = showId;
        return this;
    }
}