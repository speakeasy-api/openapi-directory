package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersExportsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersExportsListSecurityOption1 option1;
    public VaultMattersExportsListSecurity withOption1(VaultMattersExportsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersExportsListSecurityOption2 option2;
    public VaultMattersExportsListSecurity withOption2(VaultMattersExportsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}