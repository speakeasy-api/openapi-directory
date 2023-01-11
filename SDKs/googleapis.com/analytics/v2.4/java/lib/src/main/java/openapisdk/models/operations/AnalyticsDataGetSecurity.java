package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsDataGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataGetSecurityOption1 option1;
    public AnalyticsDataGetSecurity withOption1(AnalyticsDataGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataGetSecurityOption2 option2;
    public AnalyticsDataGetSecurity withOption2(AnalyticsDataGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}