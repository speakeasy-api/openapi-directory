package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementRemarketingAudienceListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementRemarketingAudienceListSecurityOption1 option1;
    public AnalyticsManagementRemarketingAudienceListSecurity withOption1(AnalyticsManagementRemarketingAudienceListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementRemarketingAudienceListSecurityOption2 option2;
    public AnalyticsManagementRemarketingAudienceListSecurity withOption2(AnalyticsManagementRemarketingAudienceListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}