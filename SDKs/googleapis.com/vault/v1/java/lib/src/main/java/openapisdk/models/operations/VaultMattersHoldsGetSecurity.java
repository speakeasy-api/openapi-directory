package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersHoldsGetSecurityOption1 option1;
    public VaultMattersHoldsGetSecurity withOption1(VaultMattersHoldsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersHoldsGetSecurityOption2 option2;
    public VaultMattersHoldsGetSecurity withOption2(VaultMattersHoldsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}