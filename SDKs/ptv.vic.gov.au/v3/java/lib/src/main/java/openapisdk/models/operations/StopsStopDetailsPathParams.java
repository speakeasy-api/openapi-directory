package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopsStopDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public StopsStopDetailsPathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop_id")
    public Integer stopId;
    public StopsStopDetailsPathParams withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
}