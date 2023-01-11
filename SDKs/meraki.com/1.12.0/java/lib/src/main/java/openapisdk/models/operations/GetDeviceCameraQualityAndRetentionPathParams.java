package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraQualityAndRetentionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCameraQualityAndRetentionPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}