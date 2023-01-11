package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointToggleShuffleForUsersPlaybackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointToggleShuffleForUsersPlaybackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public Boolean state;
    public EndpointToggleShuffleForUsersPlaybackQueryParams withState(Boolean state) {
        this.state = state;
        return this;
    }
}