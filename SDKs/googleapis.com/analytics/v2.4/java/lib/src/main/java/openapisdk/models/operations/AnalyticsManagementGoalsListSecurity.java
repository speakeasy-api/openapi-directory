package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementGoalsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementGoalsListSecurityOption1 option1;
    public AnalyticsManagementGoalsListSecurity withOption1(AnalyticsManagementGoalsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementGoalsListSecurityOption2 option2;
    public AnalyticsManagementGoalsListSecurity withOption2(AnalyticsManagementGoalsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}