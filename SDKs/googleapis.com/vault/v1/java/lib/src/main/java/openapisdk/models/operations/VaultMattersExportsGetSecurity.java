package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersExportsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersExportsGetSecurityOption1 option1;
    public VaultMattersExportsGetSecurity withOption1(VaultMattersExportsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersExportsGetSecurityOption2 option2;
    public VaultMattersExportsGetSecurity withOption2(VaultMattersExportsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}