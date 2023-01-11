package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkCameraWirelessProfileRequest {
    public UpdateNetworkCameraWirelessProfilePathParams pathParams;
    public UpdateNetworkCameraWirelessProfileRequest withPathParams(UpdateNetworkCameraWirelessProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkCameraWirelessProfileRequestBody request;
    public UpdateNetworkCameraWirelessProfileRequest withRequest(UpdateNetworkCameraWirelessProfileRequestBody request) {
        this.request = request;
        return this;
    }
}