package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlBackupRunsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlBackupRunsListSecurityOption1 option1;
    public SqlBackupRunsListSecurity withOption1(SqlBackupRunsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlBackupRunsListSecurityOption2 option2;
    public SqlBackupRunsListSecurity withOption2(SqlBackupRunsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}