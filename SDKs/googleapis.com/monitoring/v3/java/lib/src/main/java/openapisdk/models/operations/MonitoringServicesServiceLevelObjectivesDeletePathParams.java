package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringServicesServiceLevelObjectivesDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}