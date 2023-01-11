package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesInsertSecurityOption1 option1;
    public SqlDatabasesInsertSecurity withOption1(SqlDatabasesInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesInsertSecurityOption2 option2;
    public SqlDatabasesInsertSecurity withOption2(SqlDatabasesInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}