package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointPauseAUsersPlaybackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointPauseAUsersPlaybackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}