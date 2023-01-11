package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsreportingUserActivitySearchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsreportingUserActivitySearchSecurityOption1 option1;
    public AnalyticsreportingUserActivitySearchSecurity withOption1(AnalyticsreportingUserActivitySearchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsreportingUserActivitySearchSecurityOption2 option2;
    public AnalyticsreportingUserActivitySearchSecurity withOption2(AnalyticsreportingUserActivitySearchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}