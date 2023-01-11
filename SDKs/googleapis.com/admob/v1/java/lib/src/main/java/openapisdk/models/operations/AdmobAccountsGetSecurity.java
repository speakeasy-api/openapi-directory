package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AdmobAccountsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public AdmobAccountsGetSecurityOption1 option1;
    public AdmobAccountsGetSecurity withOption1(AdmobAccountsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public AdmobAccountsGetSecurityOption2 option2;
    public AdmobAccountsGetSecurity withOption2(AdmobAccountsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}