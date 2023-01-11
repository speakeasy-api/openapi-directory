package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlBackupRunsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlBackupRunsInsertSecurityOption1 option1;
    public SqlBackupRunsInsertSecurity withOption1(SqlBackupRunsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlBackupRunsInsertSecurityOption2 option2;
    public SqlBackupRunsInsertSecurity withOption2(SqlBackupRunsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}