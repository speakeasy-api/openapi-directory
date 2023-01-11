package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceParameterHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public Integer deviceId;
    public GetDeviceParameterHistoryPathParams withDeviceId(Integer deviceId) {
        this.deviceId = deviceId;
        return this;
    }
}