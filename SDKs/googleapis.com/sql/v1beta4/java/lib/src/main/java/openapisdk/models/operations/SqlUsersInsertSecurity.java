package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlUsersInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersInsertSecurityOption1 option1;
    public SqlUsersInsertSecurity withOption1(SqlUsersInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersInsertSecurityOption2 option2;
    public SqlUsersInsertSecurity withOption2(SqlUsersInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}