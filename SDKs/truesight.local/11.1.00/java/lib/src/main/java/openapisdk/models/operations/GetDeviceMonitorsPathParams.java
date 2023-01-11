package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceMonitorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public GetDeviceMonitorsPathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}