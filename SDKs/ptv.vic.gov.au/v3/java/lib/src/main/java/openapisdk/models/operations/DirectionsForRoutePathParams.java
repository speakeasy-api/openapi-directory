package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DirectionsForRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public Integer routeId;
    public DirectionsForRoutePathParams withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
}