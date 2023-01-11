package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=additional_types")
    public String additionalTypes;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams withAdditionalTypes(String additionalTypes) {
        this.additionalTypes = additionalTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetInformationAboutTheUsersCurrentPlaybackQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}