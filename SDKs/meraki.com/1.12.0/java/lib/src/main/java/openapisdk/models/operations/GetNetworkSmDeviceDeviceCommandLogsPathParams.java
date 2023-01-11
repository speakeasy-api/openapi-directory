package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSmDeviceDeviceCommandLogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public GetNetworkSmDeviceDeviceCommandLogsPathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSmDeviceDeviceCommandLogsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}