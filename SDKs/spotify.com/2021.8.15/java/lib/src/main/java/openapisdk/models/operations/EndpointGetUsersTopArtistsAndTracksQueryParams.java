package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersTopArtistsAndTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetUsersTopArtistsAndTracksQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public EndpointGetUsersTopArtistsAndTracksQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_range")
    public String timeRange;
    public EndpointGetUsersTopArtistsAndTracksQueryParams withTimeRange(String timeRange) {
        this.timeRange = timeRange;
        return this;
    }
}