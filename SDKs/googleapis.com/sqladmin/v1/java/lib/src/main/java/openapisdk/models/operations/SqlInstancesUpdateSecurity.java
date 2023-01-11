package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesUpdateSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesUpdateSecurityOption1 option1;
    public SqlInstancesUpdateSecurity withOption1(SqlInstancesUpdateSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesUpdateSecurityOption2 option2;
    public SqlInstancesUpdateSecurity withOption2(SqlInstancesUpdateSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}