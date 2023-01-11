package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlUsersUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersUpdateSecurityOption1 option1;
    public SqlUsersUpdateSecurity withOption1(SqlUsersUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersUpdateSecurityOption2 option2;
    public SqlUsersUpdateSecurity withOption2(SqlUsersUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}