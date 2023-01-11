package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetRecentlyPlayedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public Integer after;
    public EndpointGetRecentlyPlayedQueryParams withAfter(Integer after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public Integer before;
    public EndpointGetRecentlyPlayedQueryParams withBefore(Integer before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetRecentlyPlayedQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
}