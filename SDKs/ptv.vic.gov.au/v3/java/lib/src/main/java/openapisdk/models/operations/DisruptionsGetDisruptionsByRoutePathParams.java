package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionsByRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public Integer routeId;
    public DisruptionsGetDisruptionsByRoutePathParams withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
}