package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetAllowedNetworksRequest {
    public SetAllowedNetworksPathParams pathParams;
    public SetAllowedNetworksRequest withPathParams(SetAllowedNetworksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public SetAllowedNetworksRequestBody request;
    public SetAllowedNetworksRequest withRequest(SetAllowedNetworksRequestBody request) {
        this.request = request;
        return this;
    }
}