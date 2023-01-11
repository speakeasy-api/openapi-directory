package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersGetSecurityOption1 option1;
    public VaultMattersGetSecurity withOption1(VaultMattersGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersGetSecurityOption2 option2;
    public VaultMattersGetSecurity withOption2(VaultMattersGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}