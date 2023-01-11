package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public MonitoringServicesServiceLevelObjectivesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}