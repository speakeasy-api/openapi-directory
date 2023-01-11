package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsPaymentsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsPaymentsListSecurityOption1 option1;
    public AdsenseAccountsPaymentsListSecurity withOption1(AdsenseAccountsPaymentsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsPaymentsListSecurityOption2 option2;
    public AdsenseAccountsPaymentsListSecurity withOption2(AdsenseAccountsPaymentsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}