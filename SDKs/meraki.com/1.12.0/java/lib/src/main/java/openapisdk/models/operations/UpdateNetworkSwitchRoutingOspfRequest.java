package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchRoutingOspfRequest {
    public UpdateNetworkSwitchRoutingOspfPathParams pathParams;
    public UpdateNetworkSwitchRoutingOspfRequest withPathParams(UpdateNetworkSwitchRoutingOspfPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchRoutingOspfRequestBody request;
    public UpdateNetworkSwitchRoutingOspfRequest withRequest(UpdateNetworkSwitchRoutingOspfRequestBody request) {
        this.request = request;
        return this;
    }
}