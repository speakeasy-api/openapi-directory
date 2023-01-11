package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNearbyFacilitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String city;
    public GetNearbyFacilitiesQueryParams withCity(String city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=drive_time")
    public Integer driveTime;
    public GetNearbyFacilitiesQueryParams withDriveTime(Integer driveTime) {
        this.driveTime = driveTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;
    public GetNearbyFacilitiesQueryParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lng")
    public Float lng;
    public GetNearbyFacilitiesQueryParams withLng(Float lng) {
        this.lng = lng;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetNearbyFacilitiesQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetNearbyFacilitiesQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=services[]")
    public String[] services;
    public GetNearbyFacilitiesQueryParams withServices(String[] services) {
        this.services = services;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetNearbyFacilitiesQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=street_address")
    public String streetAddress;
    public GetNearbyFacilitiesQueryParams withStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public GetNearbyFacilitiesQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}