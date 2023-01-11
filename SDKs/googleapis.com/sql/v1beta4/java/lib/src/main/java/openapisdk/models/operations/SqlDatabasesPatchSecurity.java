package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlDatabasesPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesPatchSecurityOption1 option1;
    public SqlDatabasesPatchSecurity withOption1(SqlDatabasesPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlDatabasesPatchSecurityOption2 option2;
    public SqlDatabasesPatchSecurity withOption2(SqlDatabasesPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}