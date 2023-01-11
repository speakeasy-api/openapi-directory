package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsLocationPrometheusApiV1QueryRangePathParams withName(String name) {
        this.name = name;
        return this;
    }
}