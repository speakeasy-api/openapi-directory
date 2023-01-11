package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddNetworkSwitchStackRequest {
    public AddNetworkSwitchStackPathParams pathParams;
    public AddNetworkSwitchStackRequest withPathParams(AddNetworkSwitchStackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddNetworkSwitchStackRequestBody request;
    public AddNetworkSwitchStackRequest withRequest(AddNetworkSwitchStackRequestBody request) {
        this.request = request;
        return this;
    }
}