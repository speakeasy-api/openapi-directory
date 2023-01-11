package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesFailoverSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesFailoverSecurityOption1 option1;
    public SqlInstancesFailoverSecurity withOption1(SqlInstancesFailoverSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesFailoverSecurityOption2 option2;
    public SqlInstancesFailoverSecurity withOption2(SqlInstancesFailoverSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}