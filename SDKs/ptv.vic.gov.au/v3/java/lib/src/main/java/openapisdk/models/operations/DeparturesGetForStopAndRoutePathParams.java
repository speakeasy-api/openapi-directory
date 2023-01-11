package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeparturesGetForStopAndRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_id")
    public String routeId;
    public DeparturesGetForStopAndRoutePathParams withRouteId(String routeId) {
        this.routeId = routeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public DeparturesGetForStopAndRoutePathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop_id")
    public Integer stopId;
    public DeparturesGetForStopAndRoutePathParams withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
}