package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementExperimentsUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementExperimentsUpdateSecurityOption1 option1;
    public AnalyticsManagementExperimentsUpdateSecurity withOption1(AnalyticsManagementExperimentsUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementExperimentsUpdateSecurityOption2 option2;
    public AnalyticsManagementExperimentsUpdateSecurity withOption2(AnalyticsManagementExperimentsUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}