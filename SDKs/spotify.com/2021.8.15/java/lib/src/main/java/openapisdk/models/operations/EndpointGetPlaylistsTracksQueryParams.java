package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetPlaylistsTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=additional_types")
    public String additionalTypes;
    public EndpointGetPlaylistsTracksQueryParams withAdditionalTypes(String additionalTypes) {
        this.additionalTypes = additionalTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public EndpointGetPlaylistsTracksQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetPlaylistsTracksQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetPlaylistsTracksQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public EndpointGetPlaylistsTracksQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}