package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesPatchSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesPatchSecurityOption1 option1;
    public SqlInstancesPatchSecurity withOption1(SqlInstancesPatchSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesPatchSecurityOption2 option2;
    public SqlInstancesPatchSecurity withOption2(SqlInstancesPatchSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}