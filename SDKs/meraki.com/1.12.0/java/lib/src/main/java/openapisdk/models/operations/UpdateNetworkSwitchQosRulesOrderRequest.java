package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchQosRulesOrderRequest {
    public UpdateNetworkSwitchQosRulesOrderPathParams pathParams;
    public UpdateNetworkSwitchQosRulesOrderRequest withPathParams(UpdateNetworkSwitchQosRulesOrderPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchQosRulesOrderRequestBody request;
    public UpdateNetworkSwitchQosRulesOrderRequest withRequest(UpdateNetworkSwitchQosRulesOrderRequestBody request) {
        this.request = request;
        return this;
    }
}