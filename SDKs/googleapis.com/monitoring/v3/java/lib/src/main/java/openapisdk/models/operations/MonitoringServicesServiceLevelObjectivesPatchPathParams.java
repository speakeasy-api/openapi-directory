package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringServicesServiceLevelObjectivesPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}