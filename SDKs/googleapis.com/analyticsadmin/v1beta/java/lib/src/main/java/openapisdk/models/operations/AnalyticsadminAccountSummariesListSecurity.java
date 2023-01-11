package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminAccountSummariesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsadminAccountSummariesListSecurityOption1 option1;
    public AnalyticsadminAccountSummariesListSecurity withOption1(AnalyticsadminAccountSummariesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsadminAccountSummariesListSecurityOption2 option2;
    public AnalyticsadminAccountSummariesListSecurity withOption2(AnalyticsadminAccountSummariesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}