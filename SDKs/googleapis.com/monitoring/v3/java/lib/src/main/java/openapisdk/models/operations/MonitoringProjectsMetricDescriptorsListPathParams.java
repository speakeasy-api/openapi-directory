package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsMetricDescriptorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsMetricDescriptorsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}