package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CalculateReachableRangePostDataParameters calculateReachableRangePostDataParameters;
    public PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests withCalculateReachableRangePostDataParameters(openapisdk.models.shared.CalculateReachableRangePostDataParameters calculateReachableRangePostDataParameters) {
        this.calculateReachableRangePostDataParameters = calculateReachableRangePostDataParameters;
        return this;
    }
}