package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSetRepeatModeOnUsersPlaybackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointSetRepeatModeOnUsersPlaybackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public EndpointSetRepeatModeOnUsersPlaybackQueryParams withState(String state) {
        this.state = state;
        return this;
    }
}