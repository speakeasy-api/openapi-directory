package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementExperimentsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementExperimentsDeleteSecurityOption1 option1;
    public AnalyticsManagementExperimentsDeleteSecurity withOption1(AnalyticsManagementExperimentsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementExperimentsDeleteSecurityOption2 option2;
    public AnalyticsManagementExperimentsDeleteSecurity withOption2(AnalyticsManagementExperimentsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}