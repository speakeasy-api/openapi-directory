package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringLocationsGlobalMetricsScopesProjectsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}