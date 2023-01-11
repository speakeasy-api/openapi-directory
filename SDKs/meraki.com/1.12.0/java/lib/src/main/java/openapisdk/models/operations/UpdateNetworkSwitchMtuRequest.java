package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchMtuRequest {
    public UpdateNetworkSwitchMtuPathParams pathParams;
    public UpdateNetworkSwitchMtuRequest withPathParams(UpdateNetworkSwitchMtuPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchMtuRequestBody request;
    public UpdateNetworkSwitchMtuRequest withRequest(UpdateNetworkSwitchMtuRequestBody request) {
        this.request = request;
        return this;
    }
}