package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchAlternateManagementInterfaceRequest {
    public UpdateNetworkSwitchAlternateManagementInterfacePathParams pathParams;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequest withPathParams(UpdateNetworkSwitchAlternateManagementInterfacePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBody request;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequest withRequest(UpdateNetworkSwitchAlternateManagementInterfaceRequestBody request) {
        this.request = request;
        return this;
    }
}