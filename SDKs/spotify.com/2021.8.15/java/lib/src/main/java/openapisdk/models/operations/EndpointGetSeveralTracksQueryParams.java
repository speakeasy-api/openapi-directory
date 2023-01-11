package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetSeveralTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String ids;
    public EndpointGetSeveralTracksQueryParams withIds(String ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetSeveralTracksQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}