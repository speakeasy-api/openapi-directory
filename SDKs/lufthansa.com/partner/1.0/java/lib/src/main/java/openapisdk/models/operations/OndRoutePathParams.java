package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OndRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=destination")
    public String destination;
    public OndRoutePathParams withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=origin")
    public String origin;
    public OndRoutePathParams withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}