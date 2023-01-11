package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsTopTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetAnArtistsTopTracksQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}