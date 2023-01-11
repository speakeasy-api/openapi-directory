package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementFiltersGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementFiltersGetSecurityOption1 option1;
    public AnalyticsManagementFiltersGetSecurity withOption1(AnalyticsManagementFiltersGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementFiltersGetSecurityOption2 option2;
    public AnalyticsManagementFiltersGetSecurity withOption2(AnalyticsManagementFiltersGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}