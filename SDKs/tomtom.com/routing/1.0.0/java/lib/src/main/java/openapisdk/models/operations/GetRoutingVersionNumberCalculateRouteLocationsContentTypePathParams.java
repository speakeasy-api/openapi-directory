package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentType")
    public openapisdk.models.shared.ContentTypeEnum contentType;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams withContentType(openapisdk.models.shared.ContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locations")
    public String locations;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams withLocations(String locations) {
        this.locations = locations;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=versionNumber")
    public Long versionNumber;
    public GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}