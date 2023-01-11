package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopsStopsForRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public Integer routeId;
    public StopsStopsForRoutePathParams withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public StopsStopsForRoutePathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
}