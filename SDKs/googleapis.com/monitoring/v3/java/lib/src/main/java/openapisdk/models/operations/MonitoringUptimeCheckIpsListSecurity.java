package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MonitoringUptimeCheckIpsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public MonitoringUptimeCheckIpsListSecurityOption1 option1;
    public MonitoringUptimeCheckIpsListSecurity withOption1(MonitoringUptimeCheckIpsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringUptimeCheckIpsListSecurityOption2 option2;
    public MonitoringUptimeCheckIpsListSecurity withOption2(MonitoringUptimeCheckIpsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public MonitoringUptimeCheckIpsListSecurityOption3 option3;
    public MonitoringUptimeCheckIpsListSecurity withOption3(MonitoringUptimeCheckIpsListSecurityOption3 option3) {
        this.option3 = option3;
        return this;
    }
}