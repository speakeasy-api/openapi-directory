package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReinitializePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public ReinitializePathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}