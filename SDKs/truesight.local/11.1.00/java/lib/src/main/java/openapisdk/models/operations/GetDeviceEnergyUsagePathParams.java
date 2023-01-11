package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceEnergyUsagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public GetDeviceEnergyUsagePathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}