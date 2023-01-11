package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsDataMcfGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataMcfGetSecurityOption1 option1;
    public AnalyticsDataMcfGetSecurity withOption1(AnalyticsDataMcfGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataMcfGetSecurityOption2 option2;
    public AnalyticsDataMcfGetSecurity withOption2(AnalyticsDataMcfGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}