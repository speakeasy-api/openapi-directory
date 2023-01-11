package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDeviceCameraQualityAndRetentionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public UpdateDeviceCameraQualityAndRetentionPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}