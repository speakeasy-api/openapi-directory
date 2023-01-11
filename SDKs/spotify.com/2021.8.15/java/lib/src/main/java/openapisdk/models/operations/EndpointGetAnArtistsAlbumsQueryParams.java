package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsAlbumsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_groups")
    public String includeGroups;
    public EndpointGetAnArtistsAlbumsQueryParams withIncludeGroups(String includeGroups) {
        this.includeGroups = includeGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetAnArtistsAlbumsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=market")
    public String market;
    public EndpointGetAnArtistsAlbumsQueryParams withMarket(String market) {
        this.market = market;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public EndpointGetAnArtistsAlbumsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
}