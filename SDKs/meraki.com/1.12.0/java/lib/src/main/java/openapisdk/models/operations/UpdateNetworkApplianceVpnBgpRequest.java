package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkApplianceVpnBgpRequest {
    public UpdateNetworkApplianceVpnBgpPathParams pathParams;
    public UpdateNetworkApplianceVpnBgpRequest withPathParams(UpdateNetworkApplianceVpnBgpPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkApplianceVpnBgpRequestBody request;
    public UpdateNetworkApplianceVpnBgpRequest withRequest(UpdateNetworkApplianceVpnBgpRequestBody request) {
        this.request = request;
        return this;
    }
}