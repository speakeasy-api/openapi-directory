package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsNotificationChannelsSendVerificationCodePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MonitoringProjectsNotificationChannelsSendVerificationCodePathParams withName(String name) {
        this.name = name;
        return this;
    }
}