package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlOperationsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlOperationsGetSecurityOption1 option1;
    public SqlOperationsGetSecurity withOption1(SqlOperationsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlOperationsGetSecurityOption2 option2;
    public SqlOperationsGetSecurity withOption2(SqlOperationsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}