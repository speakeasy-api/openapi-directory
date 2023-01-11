package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceCameraVideoSettingsRequest {
    public UpdateDeviceCameraVideoSettingsPathParams pathParams;
    public UpdateDeviceCameraVideoSettingsRequest withPathParams(UpdateDeviceCameraVideoSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceCameraVideoSettingsRequestBody request;
    public UpdateDeviceCameraVideoSettingsRequest withRequest(UpdateDeviceCameraVideoSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}