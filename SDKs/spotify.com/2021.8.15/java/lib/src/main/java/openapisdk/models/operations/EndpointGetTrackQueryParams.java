package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetTrackQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}