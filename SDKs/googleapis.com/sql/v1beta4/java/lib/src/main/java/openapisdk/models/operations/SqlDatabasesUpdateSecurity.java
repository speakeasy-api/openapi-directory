package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesUpdateSecurityOption1 option1;
    public SqlDatabasesUpdateSecurity withOption1(SqlDatabasesUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesUpdateSecurityOption2 option2;
    public SqlDatabasesUpdateSecurity withOption2(SqlDatabasesUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}