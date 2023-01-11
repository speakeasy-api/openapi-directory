package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlUsersListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersListSecurityOption1 option1;
    public SqlUsersListSecurity withOption1(SqlUsersListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersListSecurityOption2 option2;
    public SqlUsersListSecurity withOption2(SqlUsersListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}