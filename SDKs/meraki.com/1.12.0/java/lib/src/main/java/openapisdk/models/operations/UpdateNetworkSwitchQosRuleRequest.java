package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchQosRuleRequest {
    public UpdateNetworkSwitchQosRulePathParams pathParams;
    public UpdateNetworkSwitchQosRuleRequest withPathParams(UpdateNetworkSwitchQosRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchQosRuleRequestBody request;
    public UpdateNetworkSwitchQosRuleRequest withRequest(UpdateNetworkSwitchQosRuleRequestBody request) {
        this.request = request;
        return this;
    }
}