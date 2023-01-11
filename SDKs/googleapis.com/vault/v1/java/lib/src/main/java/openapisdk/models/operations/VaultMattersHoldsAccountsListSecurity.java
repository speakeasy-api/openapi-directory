package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersHoldsAccountsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersHoldsAccountsListSecurityOption1 option1;
    public VaultMattersHoldsAccountsListSecurity withOption1(VaultMattersHoldsAccountsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersHoldsAccountsListSecurityOption2 option2;
    public VaultMattersHoldsAccountsListSecurity withOption2(VaultMattersHoldsAccountsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}