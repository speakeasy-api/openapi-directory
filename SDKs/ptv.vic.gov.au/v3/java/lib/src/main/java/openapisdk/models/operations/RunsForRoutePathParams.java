package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunsForRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public Integer routeId;
    public RunsForRoutePathParams withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
}