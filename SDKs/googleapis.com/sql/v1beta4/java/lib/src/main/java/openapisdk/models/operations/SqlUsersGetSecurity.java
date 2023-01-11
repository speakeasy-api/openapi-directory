package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlUsersGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersGetSecurityOption1 option1;
    public SqlUsersGetSecurity withOption1(SqlUsersGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlUsersGetSecurityOption2 option2;
    public SqlUsersGetSecurity withOption2(SqlUsersGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}