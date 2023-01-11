package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchStackRequest {
    public CreateNetworkSwitchStackPathParams pathParams;
    public CreateNetworkSwitchStackRequest withPathParams(CreateNetworkSwitchStackPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkSwitchStackRequestBody request;
    public CreateNetworkSwitchStackRequest withRequest(CreateNetworkSwitchStackRequestBody request) {
        this.request = request;
        return this;
    }
}