package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementAccountSummariesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementAccountSummariesListSecurityOption1 option1;
    public AnalyticsManagementAccountSummariesListSecurity withOption1(AnalyticsManagementAccountSummariesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementAccountSummariesListSecurityOption2 option2;
    public AnalyticsManagementAccountSummariesListSecurity withOption2(AnalyticsManagementAccountSummariesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}