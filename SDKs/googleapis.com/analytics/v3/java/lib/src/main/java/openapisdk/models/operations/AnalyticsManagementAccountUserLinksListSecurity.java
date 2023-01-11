package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementAccountUserLinksListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementAccountUserLinksListSecurityOption1 option1;
    public AnalyticsManagementAccountUserLinksListSecurity withOption1(AnalyticsManagementAccountUserLinksListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementAccountUserLinksListSecurityOption2 option2;
    public AnalyticsManagementAccountUserLinksListSecurity withOption2(AnalyticsManagementAccountUserLinksListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}