package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceWirelessStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceWirelessStatusPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}