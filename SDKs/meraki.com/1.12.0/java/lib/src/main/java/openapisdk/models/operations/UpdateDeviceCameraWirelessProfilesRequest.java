package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceCameraWirelessProfilesRequest {
    public UpdateDeviceCameraWirelessProfilesPathParams pathParams;
    public UpdateDeviceCameraWirelessProfilesRequest withPathParams(UpdateDeviceCameraWirelessProfilesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceCameraWirelessProfilesRequestBody request;
    public UpdateDeviceCameraWirelessProfilesRequest withRequest(UpdateDeviceCameraWirelessProfilesRequestBody request) {
        this.request = request;
        return this;
    }
}