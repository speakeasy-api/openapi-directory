package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesGetSecurityOption1 option1;
    public SqlInstancesGetSecurity withOption1(SqlInstancesGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesGetSecurityOption2 option2;
    public SqlInstancesGetSecurity withOption2(SqlInstancesGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}