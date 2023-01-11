package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveNetworkSwitchStackRequest {
    public RemoveNetworkSwitchStackPathParams pathParams;
    public RemoveNetworkSwitchStackRequest withPathParams(RemoveNetworkSwitchStackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveNetworkSwitchStackRequestBody request;
    public RemoveNetworkSwitchStackRequest withRequest(RemoveNetworkSwitchStackRequestBody request) {
        this.request = request;
        return this;
    }
}