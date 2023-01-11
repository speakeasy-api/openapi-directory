package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchStormControlRequest {
    public UpdateNetworkSwitchStormControlPathParams pathParams;
    public UpdateNetworkSwitchStormControlRequest withPathParams(UpdateNetworkSwitchStormControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchStormControlRequestBody request;
    public UpdateNetworkSwitchStormControlRequest withRequest(UpdateNetworkSwitchStormControlRequestBody request) {
        this.request = request;
        return this;
    }
}