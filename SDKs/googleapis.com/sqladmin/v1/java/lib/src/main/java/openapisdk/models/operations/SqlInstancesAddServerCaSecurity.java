package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesAddServerCaSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesAddServerCaSecurityOption1 option1;
    public SqlInstancesAddServerCaSecurity withOption1(SqlInstancesAddServerCaSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesAddServerCaSecurityOption2 option2;
    public SqlInstancesAddServerCaSecurity withOption2(SqlInstancesAddServerCaSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}