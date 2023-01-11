package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersSavedEpisodesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetUsersSavedEpisodesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetUsersSavedEpisodesQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public EndpointGetUsersSavedEpisodesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}