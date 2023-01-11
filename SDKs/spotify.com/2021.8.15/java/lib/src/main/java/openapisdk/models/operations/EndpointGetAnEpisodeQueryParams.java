package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnEpisodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetAnEpisodeQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}