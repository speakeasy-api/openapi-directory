package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsDataGaGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataGaGetSecurityOption1 option1;
    public AnalyticsDataGaGetSecurity withOption1(AnalyticsDataGaGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataGaGetSecurityOption2 option2;
    public AnalyticsDataGaGetSecurity withOption2(AnalyticsDataGaGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}