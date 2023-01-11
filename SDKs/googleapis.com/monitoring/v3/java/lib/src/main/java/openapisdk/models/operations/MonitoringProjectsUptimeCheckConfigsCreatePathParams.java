package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsUptimeCheckConfigsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringProjectsUptimeCheckConfigsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}