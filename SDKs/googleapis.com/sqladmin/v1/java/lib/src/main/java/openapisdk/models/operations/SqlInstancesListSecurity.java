package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesListSecurityOption1 option1;
    public SqlInstancesListSecurity withOption1(SqlInstancesListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesListSecurityOption2 option2;
    public SqlInstancesListSecurity withOption2(SqlInstancesListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}