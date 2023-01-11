package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesRestartSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesRestartSecurityOption1 option1;
    public SqlInstancesRestartSecurity withOption1(SqlInstancesRestartSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesRestartSecurityOption2 option2;
    public SqlInstancesRestartSecurity withOption2(SqlInstancesRestartSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}