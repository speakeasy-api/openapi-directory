package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public GetDevicePathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}