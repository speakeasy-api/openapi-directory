package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchDhcpServerPolicyRequest {
    public UpdateNetworkSwitchDhcpServerPolicyPathParams pathParams;
    public UpdateNetworkSwitchDhcpServerPolicyRequest withPathParams(UpdateNetworkSwitchDhcpServerPolicyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchDhcpServerPolicyRequestBody request;
    public UpdateNetworkSwitchDhcpServerPolicyRequest withRequest(UpdateNetworkSwitchDhcpServerPolicyRequestBody request) {
        this.request = request;
        return this;
    }
}