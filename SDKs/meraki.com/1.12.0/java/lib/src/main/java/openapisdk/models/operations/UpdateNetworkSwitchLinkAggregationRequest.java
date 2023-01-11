package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchLinkAggregationRequest {
    public UpdateNetworkSwitchLinkAggregationPathParams pathParams;
    public UpdateNetworkSwitchLinkAggregationRequest withPathParams(UpdateNetworkSwitchLinkAggregationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchLinkAggregationRequestBody request;
    public UpdateNetworkSwitchLinkAggregationRequest withRequest(UpdateNetworkSwitchLinkAggregationRequestBody request) {
        this.request = request;
        return this;
    }
}