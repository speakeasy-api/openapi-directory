package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlarmVolumeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AlarmVolumeRequest request;
    public AlarmVolumeRequest withRequest(openapisdk.models.shared.AlarmVolumeRequest request) {
        this.request = request;
        return this;
    }
}