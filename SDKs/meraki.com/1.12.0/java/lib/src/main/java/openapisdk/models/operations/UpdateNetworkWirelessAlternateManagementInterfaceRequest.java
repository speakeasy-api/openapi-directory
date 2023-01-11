package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkWirelessAlternateManagementInterfaceRequest {
    public UpdateNetworkWirelessAlternateManagementInterfacePathParams pathParams;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequest withPathParams(UpdateNetworkWirelessAlternateManagementInterfacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkWirelessAlternateManagementInterfaceRequestBody request;
    public UpdateNetworkWirelessAlternateManagementInterfaceRequest withRequest(UpdateNetworkWirelessAlternateManagementInterfaceRequestBody request) {
        this.request = request;
        return this;
    }
}