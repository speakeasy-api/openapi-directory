package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesInsertSecurityOption1 option1;
    public SqlInstancesInsertSecurity withOption1(SqlInstancesInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesInsertSecurityOption2 option2;
    public SqlInstancesInsertSecurity withOption2(SqlInstancesInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}