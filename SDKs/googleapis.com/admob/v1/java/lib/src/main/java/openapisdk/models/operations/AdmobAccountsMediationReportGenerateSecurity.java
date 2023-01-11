package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsMediationReportGenerateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdmobAccountsMediationReportGenerateSecurityOption1 option1;
    public AdmobAccountsMediationReportGenerateSecurity withOption1(AdmobAccountsMediationReportGenerateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdmobAccountsMediationReportGenerateSecurityOption2 option2;
    public AdmobAccountsMediationReportGenerateSecurity withOption2(AdmobAccountsMediationReportGenerateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}