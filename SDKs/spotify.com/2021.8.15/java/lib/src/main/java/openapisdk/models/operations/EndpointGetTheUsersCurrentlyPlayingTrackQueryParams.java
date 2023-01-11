package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetTheUsersCurrentlyPlayingTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=additional_types")
    public String additionalTypes;
    public EndpointGetTheUsersCurrentlyPlayingTrackQueryParams withAdditionalTypes(String additionalTypes) {
        this.additionalTypes = additionalTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetTheUsersCurrentlyPlayingTrackQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}