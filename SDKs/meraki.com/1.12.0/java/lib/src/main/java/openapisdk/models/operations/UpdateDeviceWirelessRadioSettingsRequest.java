package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceWirelessRadioSettingsRequest {
    public UpdateDeviceWirelessRadioSettingsPathParams pathParams;
    public UpdateDeviceWirelessRadioSettingsRequest withPathParams(UpdateDeviceWirelessRadioSettingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateDeviceWirelessRadioSettingsRequestBody request;
    public UpdateDeviceWirelessRadioSettingsRequest withRequest(UpdateDeviceWirelessRadioSettingsRequestBody request) {
        this.request = request;
        return this;
    }
}