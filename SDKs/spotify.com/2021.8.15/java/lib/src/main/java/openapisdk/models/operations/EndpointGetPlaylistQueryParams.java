package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetPlaylistQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=additional_types")
    public String additionalTypes;
    public EndpointGetPlaylistQueryParams withAdditionalTypes(String additionalTypes) {
        this.additionalTypes = additionalTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public EndpointGetPlaylistQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetPlaylistQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
}