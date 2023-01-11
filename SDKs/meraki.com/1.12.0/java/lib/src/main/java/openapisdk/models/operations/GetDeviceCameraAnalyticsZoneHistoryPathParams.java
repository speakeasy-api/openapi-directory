package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraAnalyticsZoneHistoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=serial")
    public String serial;
    public GetDeviceCameraAnalyticsZoneHistoryPathParams withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=zoneId")
    public String zoneId;
    public GetDeviceCameraAnalyticsZoneHistoryPathParams withZoneId(String zoneId) {
        this.zoneId = zoneId;
        return this;
    }
}