package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlTiersListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlTiersListSecurityOption1 option1;
    public SqlTiersListSecurity withOption1(SqlTiersListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlTiersListSecurityOption2 option2;
    public SqlTiersListSecurity withOption2(SqlTiersListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}