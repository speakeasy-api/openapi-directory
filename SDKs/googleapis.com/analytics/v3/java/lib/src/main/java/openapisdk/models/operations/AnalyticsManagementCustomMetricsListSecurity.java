package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementCustomMetricsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementCustomMetricsListSecurityOption1 option1;
    public AnalyticsManagementCustomMetricsListSecurity withOption1(AnalyticsManagementCustomMetricsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementCustomMetricsListSecurityOption2 option2;
    public AnalyticsManagementCustomMetricsListSecurity withOption2(AnalyticsManagementCustomMetricsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}