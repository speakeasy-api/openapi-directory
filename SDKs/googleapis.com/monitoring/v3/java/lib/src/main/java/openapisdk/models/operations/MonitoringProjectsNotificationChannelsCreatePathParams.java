package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsNotificationChannelsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsNotificationChannelsCreatePathParams withName(String name) {
        this.name = name;
        return this;
    }
}