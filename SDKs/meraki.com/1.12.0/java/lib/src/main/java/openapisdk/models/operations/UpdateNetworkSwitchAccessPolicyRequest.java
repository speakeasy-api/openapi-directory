package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchAccessPolicyRequest {
    public UpdateNetworkSwitchAccessPolicyPathParams pathParams;
    public UpdateNetworkSwitchAccessPolicyRequest withPathParams(UpdateNetworkSwitchAccessPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchAccessPolicyRequestBody request;
    public UpdateNetworkSwitchAccessPolicyRequest withRequest(UpdateNetworkSwitchAccessPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}