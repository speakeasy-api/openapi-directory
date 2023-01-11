package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchQosRuleRequest {
    public CreateNetworkSwitchQosRulePathParams pathParams;
    public CreateNetworkSwitchQosRuleRequest withPathParams(CreateNetworkSwitchQosRulePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchQosRuleRequestBody request;
    public CreateNetworkSwitchQosRuleRequest withRequest(CreateNetworkSwitchQosRuleRequestBody request) {
        this.request = request;
        return this;
    }
}