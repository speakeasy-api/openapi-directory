package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AnalyticsManagementExperimentsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementExperimentsInsertSecurityOption1 option1;
    public AnalyticsManagementExperimentsInsertSecurity withOption1(AnalyticsManagementExperimentsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AnalyticsManagementExperimentsInsertSecurityOption2 option2;
    public AnalyticsManagementExperimentsInsertSecurity withOption2(AnalyticsManagementExperimentsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}