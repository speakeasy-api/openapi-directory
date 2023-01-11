package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatternsGetPatternByRunPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=route_type")
    public Integer routeType;
    public PatternsGetPatternByRunPathParams withRouteType(Integer routeType) {
        this.routeType = routeType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=run_ref")
    public String runRef;
    public PatternsGetPatternByRunPathParams withRunRef(String runRef) {
        this.runRef = runRef;
        return this;
    }
}