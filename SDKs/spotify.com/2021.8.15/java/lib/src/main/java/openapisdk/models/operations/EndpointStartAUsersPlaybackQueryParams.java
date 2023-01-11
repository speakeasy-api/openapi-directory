package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointStartAUsersPlaybackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointStartAUsersPlaybackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}