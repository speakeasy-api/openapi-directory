package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringServicesListSecurityOption1 option1;
    public MonitoringServicesListSecurity withOption1(MonitoringServicesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringServicesListSecurityOption2 option2;
    public MonitoringServicesListSecurity withOption2(MonitoringServicesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringServicesListSecurityOption3 option3;
    public MonitoringServicesListSecurity withOption3(MonitoringServicesListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}