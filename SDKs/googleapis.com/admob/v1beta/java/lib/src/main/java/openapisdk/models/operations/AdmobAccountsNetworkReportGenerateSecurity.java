package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsNetworkReportGenerateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdmobAccountsNetworkReportGenerateSecurityOption1 option1;
    public AdmobAccountsNetworkReportGenerateSecurity withOption1(AdmobAccountsNetworkReportGenerateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdmobAccountsNetworkReportGenerateSecurityOption2 option2;
    public AdmobAccountsNetworkReportGenerateSecurity withOption2(AdmobAccountsNetworkReportGenerateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}