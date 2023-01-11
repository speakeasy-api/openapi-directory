package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BusinessprofileperformanceLocationsGetDailyMetricsTimeSeriesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}