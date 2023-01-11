package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesGetSecurityOption1 option1;
    public SqlDatabasesGetSecurity withOption1(SqlDatabasesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesGetSecurityOption2 option2;
    public SqlDatabasesGetSecurity withOption2(SqlDatabasesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}