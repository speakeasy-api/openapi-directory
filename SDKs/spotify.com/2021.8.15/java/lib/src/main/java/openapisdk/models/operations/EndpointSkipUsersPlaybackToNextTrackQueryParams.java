package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSkipUsersPlaybackToNextTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointSkipUsersPlaybackToNextTrackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}