package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesRestoreBackupSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesRestoreBackupSecurityOption1 option1;
    public SqlInstancesRestoreBackupSecurity withOption1(SqlInstancesRestoreBackupSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesRestoreBackupSecurityOption2 option2;
    public SqlInstancesRestoreBackupSecurity withOption2(SqlInstancesRestoreBackupSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}