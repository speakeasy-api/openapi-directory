package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsDashboardsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringProjectsDashboardsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}