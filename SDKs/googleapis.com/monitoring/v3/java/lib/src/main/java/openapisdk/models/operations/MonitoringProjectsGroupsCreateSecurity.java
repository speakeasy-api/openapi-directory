package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsGroupsCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsGroupsCreateSecurityOption1 option1;
    public MonitoringProjectsGroupsCreateSecurity withOption1(MonitoringProjectsGroupsCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsGroupsCreateSecurityOption2 option2;
    public MonitoringProjectsGroupsCreateSecurity withOption2(MonitoringProjectsGroupsCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}