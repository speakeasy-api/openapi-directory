package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetFeaturedPlaylistsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public EndpointGetFeaturedPlaylistsQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public EndpointGetFeaturedPlaylistsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public EndpointGetFeaturedPlaylistsQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public EndpointGetFeaturedPlaylistsQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public String timestamp;
    public EndpointGetFeaturedPlaylistsQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}