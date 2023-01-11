package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsNotificationChannelsGetVerificationCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsNotificationChannelsGetVerificationCodePathParams withName(String name) {
        this.name = name;
        return this;
    }
}