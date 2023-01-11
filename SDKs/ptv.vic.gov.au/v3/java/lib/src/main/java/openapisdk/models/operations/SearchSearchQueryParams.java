package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public SearchSearchQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_addresses")
    public Boolean includeAddresses;
    public SearchSearchQueryParams withIncludeAddresses(Boolean includeAddresses) {
        this.includeAddresses = includeAddresses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_outlets")
    public Boolean includeOutlets;
    public SearchSearchQueryParams withIncludeOutlets(Boolean includeOutlets) {
        this.includeOutlets = includeOutlets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=latitude")
    public Float latitude;
    public SearchSearchQueryParams withLatitude(Float latitude) {
        this.latitude = latitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=longitude")
    public Float longitude;
    public SearchSearchQueryParams withLongitude(Float longitude) {
        this.longitude = longitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=match_route_by_suburb")
    public Boolean matchRouteBySuburb;
    public SearchSearchQueryParams withMatchRouteBySuburb(Boolean matchRouteBySuburb) {
        this.matchRouteBySuburb = matchRouteBySuburb;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=match_stop_by_gtfs_stop_id")
    public Boolean matchStopByGtfsStopId;
    public SearchSearchQueryParams withMatchStopByGtfsStopId(Boolean matchStopByGtfsStopId) {
        this.matchStopByGtfsStopId = matchStopByGtfsStopId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=match_stop_by_suburb")
    public Boolean matchStopBySuburb;
    public SearchSearchQueryParams withMatchStopBySuburb(Boolean matchStopBySuburb) {
        this.matchStopBySuburb = matchStopBySuburb;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_distance")
    public Float maxDistance;
    public SearchSearchQueryParams withMaxDistance(Float maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=route_types")
    public Integer[] routeTypes;
    public SearchSearchQueryParams withRouteTypes(Integer[] routeTypes) {
        this.routeTypes = routeTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public SearchSearchQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public SearchSearchQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}