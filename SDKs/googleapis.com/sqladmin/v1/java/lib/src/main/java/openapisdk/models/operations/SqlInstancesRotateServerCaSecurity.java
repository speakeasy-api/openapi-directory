package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesRotateServerCaSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesRotateServerCaSecurityOption1 option1;
    public SqlInstancesRotateServerCaSecurity withOption1(SqlInstancesRotateServerCaSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesRotateServerCaSecurityOption2 option2;
    public SqlInstancesRotateServerCaSecurity withOption2(SqlInstancesRotateServerCaSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}