package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSetVolumeForUsersPlaybackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointSetVolumeForUsersPlaybackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=volume_percent")
    public Integer volumePercent;
    public EndpointSetVolumeForUsersPlaybackQueryParams withVolumePercent(Integer volumePercent) {
        this.volumePercent = volumePercent;
        return this;
    }
}