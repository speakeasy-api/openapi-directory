package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeviceCameraAnalyticsOverviewQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=objectType")
    public GetDeviceCameraAnalyticsOverviewObjectTypeEnum objectType;
    public GetDeviceCameraAnalyticsOverviewQueryParams withObjectType(GetDeviceCameraAnalyticsOverviewObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetDeviceCameraAnalyticsOverviewQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetDeviceCameraAnalyticsOverviewQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetDeviceCameraAnalyticsOverviewQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}