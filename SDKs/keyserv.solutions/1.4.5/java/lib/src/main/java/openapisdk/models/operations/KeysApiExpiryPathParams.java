package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeysApiExpiryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public KeysApiExpiryPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}