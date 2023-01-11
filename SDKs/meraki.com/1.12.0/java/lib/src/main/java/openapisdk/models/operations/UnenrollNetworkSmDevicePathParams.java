package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnenrollNetworkSmDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=deviceId")
    public String deviceId;
    public UnenrollNetworkSmDevicePathParams withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UnenrollNetworkSmDevicePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}