package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAgentDevicesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public GetAgentDevicesPathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}