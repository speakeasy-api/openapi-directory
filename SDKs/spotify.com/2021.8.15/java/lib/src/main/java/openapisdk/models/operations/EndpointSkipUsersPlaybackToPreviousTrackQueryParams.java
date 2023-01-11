package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSkipUsersPlaybackToPreviousTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointSkipUsersPlaybackToPreviousTrackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}