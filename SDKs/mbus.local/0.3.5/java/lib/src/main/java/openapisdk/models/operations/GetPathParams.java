package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=baudrate")
    public Integer baudrate;
    public GetPathParams withBaudrate(Integer baudrate) {
        this.baudrate = baudrate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device")
    public String device;
    public GetPathParams withDevice(String device) {
        this.device = device;
        return this;
    }
}