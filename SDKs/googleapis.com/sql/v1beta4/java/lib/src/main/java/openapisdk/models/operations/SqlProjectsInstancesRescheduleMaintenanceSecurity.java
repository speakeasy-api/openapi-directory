package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlProjectsInstancesRescheduleMaintenanceSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlProjectsInstancesRescheduleMaintenanceSecurityOption1 option1;
    public SqlProjectsInstancesRescheduleMaintenanceSecurity withOption1(SqlProjectsInstancesRescheduleMaintenanceSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlProjectsInstancesRescheduleMaintenanceSecurityOption2 option2;
    public SqlProjectsInstancesRescheduleMaintenanceSecurity withOption2(SqlProjectsInstancesRescheduleMaintenanceSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}