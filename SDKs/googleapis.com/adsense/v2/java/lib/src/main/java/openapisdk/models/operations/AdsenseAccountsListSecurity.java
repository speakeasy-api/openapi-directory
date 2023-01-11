package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsListSecurityOption1 option1;
    public AdsenseAccountsListSecurity withOption1(AdsenseAccountsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsListSecurityOption2 option2;
    public AdsenseAccountsListSecurity withOption2(AdsenseAccountsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}