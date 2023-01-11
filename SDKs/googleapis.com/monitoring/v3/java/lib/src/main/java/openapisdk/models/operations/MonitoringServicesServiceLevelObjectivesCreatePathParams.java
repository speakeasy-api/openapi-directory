package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringServicesServiceLevelObjectivesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}