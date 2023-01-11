package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsCollectdTimeSeriesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsCollectdTimeSeriesCreatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}