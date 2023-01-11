package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementClientIdHashClientIdSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementClientIdHashClientIdSecurityOption1 option1;
    public AnalyticsManagementClientIdHashClientIdSecurity withOption1(AnalyticsManagementClientIdHashClientIdSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementClientIdHashClientIdSecurityOption2 option2;
    public AnalyticsManagementClientIdHashClientIdSecurity withOption2(AnalyticsManagementClientIdHashClientIdSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}