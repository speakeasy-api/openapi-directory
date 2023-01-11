package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceWirelessConnectionStatsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceWirelessConnectionStatsPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}