package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsUptimeCheckConfigsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringProjectsUptimeCheckConfigsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}