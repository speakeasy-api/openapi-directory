package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkCameraWirelessProfileRequest {
    public CreateNetworkCameraWirelessProfilePathParams pathParams;
    public CreateNetworkCameraWirelessProfileRequest withPathParams(CreateNetworkCameraWirelessProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateNetworkCameraWirelessProfileRequestBody request;
    public CreateNetworkCameraWirelessProfileRequest withRequest(CreateNetworkCameraWirelessProfileRequestBody request) {
        this.request = request;
        return this;
    }
}