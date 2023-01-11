package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class KeysApiCustomPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public KeysApiCustomPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}