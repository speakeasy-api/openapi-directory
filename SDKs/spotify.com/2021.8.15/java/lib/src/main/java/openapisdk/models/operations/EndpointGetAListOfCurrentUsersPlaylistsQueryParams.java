package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAListOfCurrentUsersPlaylistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetAListOfCurrentUsersPlaylistsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public EndpointGetAListOfCurrentUsersPlaylistsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}