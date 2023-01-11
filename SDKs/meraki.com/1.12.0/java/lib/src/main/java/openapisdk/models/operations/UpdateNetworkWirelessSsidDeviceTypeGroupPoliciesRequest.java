package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest {
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams pathParams;
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest withPathParams(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody request;
    public UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest withRequest(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestBody request) {
        this.request = request;
        return this;
    }
}