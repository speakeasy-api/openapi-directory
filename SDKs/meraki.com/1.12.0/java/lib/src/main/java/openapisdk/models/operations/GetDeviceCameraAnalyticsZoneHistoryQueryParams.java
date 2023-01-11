package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraAnalyticsZoneHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=objectType")
    public GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum objectType;
    public GetDeviceCameraAnalyticsZoneHistoryQueryParams withObjectType(GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resolution")
    public Long resolution;
    public GetDeviceCameraAnalyticsZoneHistoryQueryParams withResolution(Long resolution) {
        this.resolution = resolution;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetDeviceCameraAnalyticsZoneHistoryQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetDeviceCameraAnalyticsZoneHistoryQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetDeviceCameraAnalyticsZoneHistoryQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}