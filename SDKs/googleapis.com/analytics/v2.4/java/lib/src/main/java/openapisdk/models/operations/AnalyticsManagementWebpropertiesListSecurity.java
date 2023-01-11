package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementWebpropertiesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementWebpropertiesListSecurityOption1 option1;
    public AnalyticsManagementWebpropertiesListSecurity withOption1(AnalyticsManagementWebpropertiesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementWebpropertiesListSecurityOption2 option2;
    public AnalyticsManagementWebpropertiesListSecurity withOption2(AnalyticsManagementWebpropertiesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}