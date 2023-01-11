package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=label")
    public String label;
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams withLabel(String label) {
        this.label = label;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsLocationPrometheusApiV1LabelValuesPathParams withName(String name) {
        this.name = name;
        return this;
    }
}