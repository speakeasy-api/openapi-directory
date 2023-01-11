package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsDashboardsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsDashboardsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}