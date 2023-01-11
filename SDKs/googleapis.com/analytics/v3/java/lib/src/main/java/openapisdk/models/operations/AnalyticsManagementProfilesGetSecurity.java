package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfilesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementProfilesGetSecurityOption1 option1;
    public AnalyticsManagementProfilesGetSecurity withOption1(AnalyticsManagementProfilesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementProfilesGetSecurityOption2 option2;
    public AnalyticsManagementProfilesGetSecurity withOption2(AnalyticsManagementProfilesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}