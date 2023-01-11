package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesDeleteSecurityOption1 option1;
    public SqlDatabasesDeleteSecurity withOption1(SqlDatabasesDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesDeleteSecurityOption2 option2;
    public SqlDatabasesDeleteSecurity withOption2(SqlDatabasesDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}