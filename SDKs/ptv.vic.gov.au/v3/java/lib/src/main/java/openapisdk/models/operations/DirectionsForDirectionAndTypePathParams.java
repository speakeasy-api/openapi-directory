package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DirectionsForDirectionAndTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=direction_id")
    public Integer directionId;
    public DirectionsForDirectionAndTypePathParams withDirectionId(Integer directionId) {
        this.directionId = directionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public DirectionsForDirectionAndTypePathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
}