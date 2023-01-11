package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsadminPropertiesDataStreamsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsadminPropertiesDataStreamsListSecurityOption1 option1;
    public AnalyticsadminPropertiesDataStreamsListSecurity withOption1(AnalyticsadminPropertiesDataStreamsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsadminPropertiesDataStreamsListSecurityOption2 option2;
    public AnalyticsadminPropertiesDataStreamsListSecurity withOption2(AnalyticsadminPropertiesDataStreamsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}