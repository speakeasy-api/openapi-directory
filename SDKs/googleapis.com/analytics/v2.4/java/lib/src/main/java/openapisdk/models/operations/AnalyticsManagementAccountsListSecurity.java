package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementAccountsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementAccountsListSecurityOption1 option1;
    public AnalyticsManagementAccountsListSecurity withOption1(AnalyticsManagementAccountsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementAccountsListSecurityOption2 option2;
    public AnalyticsManagementAccountsListSecurity withOption2(AnalyticsManagementAccountsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}