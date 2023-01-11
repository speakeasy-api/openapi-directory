package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesDeleteSecurityOption1 option1;
    public SqlInstancesDeleteSecurity withOption1(SqlInstancesDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesDeleteSecurityOption2 option2;
    public SqlInstancesDeleteSecurity withOption2(SqlInstancesDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}