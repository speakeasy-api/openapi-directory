package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RoutesRouteFromIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public Integer routeId;
    public RoutesRouteFromIdPathParams withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
}