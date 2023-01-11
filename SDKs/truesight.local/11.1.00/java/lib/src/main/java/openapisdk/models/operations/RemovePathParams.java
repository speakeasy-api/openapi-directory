package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public RemovePathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}