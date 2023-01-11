package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeparturesGetForStopPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public DeparturesGetForStopPathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stop_id")
    public Integer stopId;
    public DeparturesGetForStopPathParams withStopId(Integer stopId) {
        this.stopId = stopId;
        return this;
    }
}