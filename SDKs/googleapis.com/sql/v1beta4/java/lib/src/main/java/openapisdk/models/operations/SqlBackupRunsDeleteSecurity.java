package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlBackupRunsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlBackupRunsDeleteSecurityOption1 option1;
    public SqlBackupRunsDeleteSecurity withOption1(SqlBackupRunsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlBackupRunsDeleteSecurityOption2 option2;
    public SqlBackupRunsDeleteSecurity withOption2(SqlBackupRunsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}