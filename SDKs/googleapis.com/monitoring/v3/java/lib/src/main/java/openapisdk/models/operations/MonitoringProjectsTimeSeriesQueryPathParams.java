package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsTimeSeriesQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsTimeSeriesQueryPathParams withName(String name) {
        this.name = name;
        return this;
    }
}