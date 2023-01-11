package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsSnoozesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringProjectsSnoozesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}