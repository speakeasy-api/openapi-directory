package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementSegmentsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementSegmentsListSecurityOption1 option1;
    public AnalyticsManagementSegmentsListSecurity withOption1(AnalyticsManagementSegmentsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementSegmentsListSecurityOption2 option2;
    public AnalyticsManagementSegmentsListSecurity withOption2(AnalyticsManagementSegmentsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}