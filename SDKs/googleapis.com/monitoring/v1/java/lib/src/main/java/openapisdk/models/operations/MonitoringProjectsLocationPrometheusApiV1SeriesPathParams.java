package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1SeriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public MonitoringProjectsLocationPrometheusApiV1SeriesPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsLocationPrometheusApiV1SeriesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}