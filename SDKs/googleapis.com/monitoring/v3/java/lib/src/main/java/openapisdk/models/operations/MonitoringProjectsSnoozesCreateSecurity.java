package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsSnoozesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsSnoozesCreateSecurityOption1 option1;
    public MonitoringProjectsSnoozesCreateSecurity withOption1(MonitoringProjectsSnoozesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsSnoozesCreateSecurityOption2 option2;
    public MonitoringProjectsSnoozesCreateSecurity withOption2(MonitoringProjectsSnoozesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}