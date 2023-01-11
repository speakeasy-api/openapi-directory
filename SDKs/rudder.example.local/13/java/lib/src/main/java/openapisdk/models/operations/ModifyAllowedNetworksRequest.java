package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ModifyAllowedNetworksRequest {
    public ModifyAllowedNetworksPathParams pathParams;
    public ModifyAllowedNetworksRequest withPathParams(ModifyAllowedNetworksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ModifyAllowedNetworksRequestBody request;
    public ModifyAllowedNetworksRequest withRequest(ModifyAllowedNetworksRequestBody request) {
        this.request = request;
        return this;
    }
}