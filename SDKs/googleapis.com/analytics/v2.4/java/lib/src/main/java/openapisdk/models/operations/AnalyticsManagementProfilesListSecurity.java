package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfilesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementProfilesListSecurityOption1 option1;
    public AnalyticsManagementProfilesListSecurity withOption1(AnalyticsManagementProfilesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementProfilesListSecurityOption2 option2;
    public AnalyticsManagementProfilesListSecurity withOption2(AnalyticsManagementProfilesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}