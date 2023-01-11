package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleGeoPeopleGeoGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public PeopleGeoPeopleGeoGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.PersonIncludeEnum[] include;
    public PeopleGeoPeopleGeoGetQueryParams withInclude(openapisdk.models.shared.PersonIncludeEnum[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Double lat;
    public PeopleGeoPeopleGeoGetQueryParams withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lng")
    public Double lng;
    public PeopleGeoPeopleGeoGetQueryParams withLng(Double lng) {
        this.lng = lng;
        return this;
    }
}