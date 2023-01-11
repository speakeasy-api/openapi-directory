package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScanPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=baudrate")
    public Integer baudrate;
    public ScanPathParams withBaudrate(Integer baudrate) {
        this.baudrate = baudrate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device")
    public String device;
    public ScanPathParams withDevice(String device) {
        this.device = device;
        return this;
    }
}