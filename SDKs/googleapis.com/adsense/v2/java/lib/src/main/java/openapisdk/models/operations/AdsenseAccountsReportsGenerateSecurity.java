package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsReportsGenerateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsReportsGenerateSecurityOption1 option1;
    public AdsenseAccountsReportsGenerateSecurity withOption1(AdsenseAccountsReportsGenerateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsReportsGenerateSecurityOption2 option2;
    public AdsenseAccountsReportsGenerateSecurity withOption2(AdsenseAccountsReportsGenerateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}