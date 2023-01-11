package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchAccessPolicyRequest {
    public CreateNetworkSwitchAccessPolicyPathParams pathParams;
    public CreateNetworkSwitchAccessPolicyRequest withPathParams(CreateNetworkSwitchAccessPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchAccessPolicyRequestBody request;
    public CreateNetworkSwitchAccessPolicyRequest withRequest(CreateNetworkSwitchAccessPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}