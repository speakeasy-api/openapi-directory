package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalculateRoutePostDataParameters calculateRoutePostDataParameters;
    public PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequests withCalculateRoutePostDataParameters(openapisdk.models.shared.CalculateRoutePostDataParameters calculateRoutePostDataParameters) {
        this.calculateRoutePostDataParameters = calculateRoutePostDataParameters;
        return this;
    }
}