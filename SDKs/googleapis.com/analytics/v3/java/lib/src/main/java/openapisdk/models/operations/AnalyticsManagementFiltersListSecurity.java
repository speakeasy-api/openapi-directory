package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementFiltersListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementFiltersListSecurityOption1 option1;
    public AnalyticsManagementFiltersListSecurity withOption1(AnalyticsManagementFiltersListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementFiltersListSecurityOption2 option2;
    public AnalyticsManagementFiltersListSecurity withOption2(AnalyticsManagementFiltersListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}