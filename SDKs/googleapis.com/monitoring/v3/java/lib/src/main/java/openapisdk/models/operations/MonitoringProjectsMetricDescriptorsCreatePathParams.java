package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsMetricDescriptorsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsMetricDescriptorsCreatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}