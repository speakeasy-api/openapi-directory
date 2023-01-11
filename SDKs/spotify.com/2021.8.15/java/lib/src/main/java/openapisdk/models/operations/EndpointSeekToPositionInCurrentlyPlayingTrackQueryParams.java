package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=device_id")
    public String deviceId;
    public EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position_ms")
    public Integer positionMs;
    public EndpointSeekToPositionInCurrentlyPlayingTrackQueryParams withPositionMs(Integer positionMs) {
        this.positionMs = positionMs;
        return this;
    }
}