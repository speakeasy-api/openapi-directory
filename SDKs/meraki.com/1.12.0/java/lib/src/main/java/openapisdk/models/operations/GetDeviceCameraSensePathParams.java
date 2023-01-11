package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraSensePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCameraSensePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}