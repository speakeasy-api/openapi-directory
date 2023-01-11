package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CollectNowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public CollectNowPathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}