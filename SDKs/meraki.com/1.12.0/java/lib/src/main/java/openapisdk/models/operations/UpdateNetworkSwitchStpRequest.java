package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStpRequest {
    public UpdateNetworkSwitchStpPathParams pathParams;
    public UpdateNetworkSwitchStpRequest withPathParams(UpdateNetworkSwitchStpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchStpRequestBody request;
    public UpdateNetworkSwitchStpRequest withRequest(UpdateNetworkSwitchStpRequestBody request) {
        this.request = request;
        return this;
    }
}