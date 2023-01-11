package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunsForRouteAndRouteTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public Integer routeId;
    public RunsForRouteAndRouteTypePathParams withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public RunsForRouteAndRouteTypePathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
}