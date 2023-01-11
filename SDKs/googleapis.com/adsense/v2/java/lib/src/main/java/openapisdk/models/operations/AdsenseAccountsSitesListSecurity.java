package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsSitesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsSitesListSecurityOption1 option1;
    public AdsenseAccountsSitesListSecurity withOption1(AdsenseAccountsSitesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsSitesListSecurityOption2 option2;
    public AdsenseAccountsSitesListSecurity withOption2(AdsenseAccountsSitesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}