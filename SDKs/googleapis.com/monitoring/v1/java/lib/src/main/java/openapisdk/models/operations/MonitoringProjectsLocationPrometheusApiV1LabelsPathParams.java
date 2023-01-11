package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1LabelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public MonitoringProjectsLocationPrometheusApiV1LabelsPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsLocationPrometheusApiV1LabelsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}