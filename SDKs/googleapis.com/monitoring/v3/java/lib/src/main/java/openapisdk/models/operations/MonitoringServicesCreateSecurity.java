package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesCreateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringServicesCreateSecurityOption1 option1;
    public MonitoringServicesCreateSecurity withOption1(MonitoringServicesCreateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringServicesCreateSecurityOption2 option2;
    public MonitoringServicesCreateSecurity withOption2(MonitoringServicesCreateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}