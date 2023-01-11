package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesCheckSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ServicecontrolServicesCheckSecurityOption1 option1;
    public ServicecontrolServicesCheckSecurity withOption1(ServicecontrolServicesCheckSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ServicecontrolServicesCheckSecurityOption2 option2;
    public ServicecontrolServicesCheckSecurity withOption2(ServicecontrolServicesCheckSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}