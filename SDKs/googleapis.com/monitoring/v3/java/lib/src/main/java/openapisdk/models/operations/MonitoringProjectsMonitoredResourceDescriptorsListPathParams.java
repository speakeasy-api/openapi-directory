package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsMonitoredResourceDescriptorsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsMonitoredResourceDescriptorsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}