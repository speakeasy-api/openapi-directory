package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchLinkAggregationRequest {
    public CreateNetworkSwitchLinkAggregationPathParams pathParams;
    public CreateNetworkSwitchLinkAggregationRequest withPathParams(CreateNetworkSwitchLinkAggregationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchLinkAggregationRequestBody request;
    public CreateNetworkSwitchLinkAggregationRequest withRequest(CreateNetworkSwitchLinkAggregationRequestBody request) {
        this.request = request;
        return this;
    }
}