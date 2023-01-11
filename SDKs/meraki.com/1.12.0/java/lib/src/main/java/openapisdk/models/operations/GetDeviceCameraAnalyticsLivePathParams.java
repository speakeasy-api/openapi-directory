package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraAnalyticsLivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCameraAnalyticsLivePathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}