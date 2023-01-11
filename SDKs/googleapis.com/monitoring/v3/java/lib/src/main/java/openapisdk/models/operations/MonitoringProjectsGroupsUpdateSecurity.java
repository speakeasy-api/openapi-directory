package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringProjectsGroupsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsGroupsUpdateSecurityOption1 option1;
    public MonitoringProjectsGroupsUpdateSecurity withOption1(MonitoringProjectsGroupsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringProjectsGroupsUpdateSecurityOption2 option2;
    public MonitoringProjectsGroupsUpdateSecurity withOption2(MonitoringProjectsGroupsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}