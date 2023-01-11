package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdsenseAccountsSitesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsSitesGetSecurityOption1 option1;
    public AdsenseAccountsSitesGetSecurity withOption1(AdsenseAccountsSitesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdsenseAccountsSitesGetSecurityOption2 option2;
    public AdsenseAccountsSitesGetSecurity withOption2(AdsenseAccountsSitesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}