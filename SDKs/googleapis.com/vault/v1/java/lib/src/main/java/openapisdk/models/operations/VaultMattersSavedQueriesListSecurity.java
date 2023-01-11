package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VaultMattersSavedQueriesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersSavedQueriesListSecurityOption1 option1;
    public VaultMattersSavedQueriesListSecurity withOption1(VaultMattersSavedQueriesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public VaultMattersSavedQueriesListSecurityOption2 option2;
    public VaultMattersSavedQueriesListSecurity withOption2(VaultMattersSavedQueriesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}