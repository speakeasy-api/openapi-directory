package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsSnoozesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringProjectsSnoozesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}