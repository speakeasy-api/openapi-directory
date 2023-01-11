package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RediscoverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public RediscoverPathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}