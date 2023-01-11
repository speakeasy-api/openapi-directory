package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraAnalyticsZonesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCameraAnalyticsZonesPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}