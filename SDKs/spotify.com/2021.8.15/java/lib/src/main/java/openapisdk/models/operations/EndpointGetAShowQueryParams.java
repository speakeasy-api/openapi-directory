package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAShowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetAShowQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}