package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsListChildAccountsSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsListChildAccountsSecurityOption1 option1;
    public AdsenseAccountsListChildAccountsSecurity withOption1(AdsenseAccountsListChildAccountsSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsListChildAccountsSecurityOption2 option2;
    public AdsenseAccountsListChildAccountsSecurity withOption2(AdsenseAccountsListChildAccountsSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}