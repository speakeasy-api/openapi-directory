package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsMetadataColumnsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsMetadataColumnsListSecurityOption1 option1;
    public AnalyticsMetadataColumnsListSecurity withOption1(AnalyticsMetadataColumnsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsMetadataColumnsListSecurityOption2 option2;
    public AnalyticsMetadataColumnsListSecurity withOption2(AnalyticsMetadataColumnsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsMetadataColumnsListSecurityOption3 option3;
    public AnalyticsMetadataColumnsListSecurity withOption3(AnalyticsMetadataColumnsListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}