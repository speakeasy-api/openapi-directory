package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlProjectsInstancesStartExternalSyncSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlProjectsInstancesStartExternalSyncSecurityOption1 option1;
    public SqlProjectsInstancesStartExternalSyncSecurity withOption1(SqlProjectsInstancesStartExternalSyncSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlProjectsInstancesStartExternalSyncSecurityOption2 option2;
    public SqlProjectsInstancesStartExternalSyncSecurity withOption2(SqlProjectsInstancesStartExternalSyncSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}