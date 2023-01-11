package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesListSecurityOption1 option1;
    public SqlDatabasesListSecurity withOption1(SqlDatabasesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesListSecurityOption2 option2;
    public SqlDatabasesListSecurity withOption2(SqlDatabasesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}