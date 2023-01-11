package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsDataRealtimeGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataRealtimeGetSecurityOption1 option1;
    public AnalyticsDataRealtimeGetSecurity withOption1(AnalyticsDataRealtimeGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsDataRealtimeGetSecurityOption2 option2;
    public AnalyticsDataRealtimeGetSecurity withOption2(AnalyticsDataRealtimeGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}