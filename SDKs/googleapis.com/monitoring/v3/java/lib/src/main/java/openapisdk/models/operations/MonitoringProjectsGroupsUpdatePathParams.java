package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsGroupsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsGroupsUpdatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}