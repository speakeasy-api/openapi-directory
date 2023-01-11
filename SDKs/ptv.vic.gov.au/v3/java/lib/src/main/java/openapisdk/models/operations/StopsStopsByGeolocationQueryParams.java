package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopsStopsByGeolocationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=devid")
    public String devid;
    public StopsStopsByGeolocationQueryParams withDevid(String devid) {
        this.devid = devid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_distance")
    public Double maxDistance;
    public StopsStopsByGeolocationQueryParams withMaxDistance(Double maxDistance) {
        this.maxDistance = maxDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_results")
    public Integer maxResults;
    public StopsStopsByGeolocationQueryParams withMaxResults(Integer maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=route_types")
    public Integer[] routeTypes;
    public StopsStopsByGeolocationQueryParams withRouteTypes(Integer[] routeTypes) {
        this.routeTypes = routeTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=signature")
    public String signature;
    public StopsStopsByGeolocationQueryParams withSignature(String signature) {
        this.signature = signature;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=stop_disruptions")
    public Boolean stopDisruptions;
    public StopsStopsByGeolocationQueryParams withStopDisruptions(Boolean stopDisruptions) {
        this.stopDisruptions = stopDisruptions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public StopsStopsByGeolocationQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}