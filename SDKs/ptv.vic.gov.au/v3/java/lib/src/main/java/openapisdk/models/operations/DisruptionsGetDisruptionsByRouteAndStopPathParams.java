package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisruptionsGetDisruptionsByRouteAndStopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public Integer routeId;
    public DisruptionsGetDisruptionsByRouteAndStopPathParams withRouteId(Integer routeId) {
        this.routeId = routeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop_id")
    public Integer stopId;
    public DisruptionsGetDisruptionsByRouteAndStopPathParams withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
}