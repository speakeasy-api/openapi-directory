package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringServicesServiceLevelObjectivesPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringServicesServiceLevelObjectivesPatchSecurityOption1 option1;
    public MonitoringServicesServiceLevelObjectivesPatchSecurity withOption1(MonitoringServicesServiceLevelObjectivesPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringServicesServiceLevelObjectivesPatchSecurityOption2 option2;
    public MonitoringServicesServiceLevelObjectivesPatchSecurity withOption2(MonitoringServicesServiceLevelObjectivesPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}