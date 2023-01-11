package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunsForRunAndRouteTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public RunsForRunAndRouteTypePathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=run_ref")
    public String runRef;
    public RunsForRunAndRouteTypePathParams withRunRef(String runRef) {
        this.runRef = runRef;
        return this;
    }
}