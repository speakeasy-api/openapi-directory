package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementProfileUserLinksListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementProfileUserLinksListSecurityOption1 option1;
    public AnalyticsManagementProfileUserLinksListSecurity withOption1(AnalyticsManagementProfileUserLinksListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementProfileUserLinksListSecurityOption2 option2;
    public AnalyticsManagementProfileUserLinksListSecurity withOption2(AnalyticsManagementProfileUserLinksListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}