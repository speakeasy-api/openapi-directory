package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsNotificationChannelsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsNotificationChannelsCreateSecurityOption1 option1;
    public MonitoringProjectsNotificationChannelsCreateSecurity withOption1(MonitoringProjectsNotificationChannelsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsNotificationChannelsCreateSecurityOption2 option2;
    public MonitoringProjectsNotificationChannelsCreateSecurity withOption2(MonitoringProjectsNotificationChannelsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}