package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMultiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=address")
    public String address;
    public GetMultiPathParams withAddress(String address) {
        this.address = address;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=baudrate")
    public Integer baudrate;
    public GetMultiPathParams withBaudrate(Integer baudrate) {
        this.baudrate = baudrate;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=device")
    public String device;
    public GetMultiPathParams withDevice(String device) {
        this.device = device;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=maxframes")
    public Integer maxframes;
    public GetMultiPathParams withMaxframes(Integer maxframes) {
        this.maxframes = maxframes;
        return this;
    }
}