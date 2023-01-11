package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceAgentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public GetDeviceAgentPathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}