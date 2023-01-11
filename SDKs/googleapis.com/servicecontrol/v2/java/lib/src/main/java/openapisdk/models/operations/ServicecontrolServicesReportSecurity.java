package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicecontrolServicesReportSecurity {
    @SpeakeasyMetadata("security:option=true")
    public ServicecontrolServicesReportSecurityOption1 option1;
    public ServicecontrolServicesReportSecurity withOption1(ServicecontrolServicesReportSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public ServicecontrolServicesReportSecurityOption2 option2;
    public ServicecontrolServicesReportSecurity withOption2(ServicecontrolServicesReportSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}