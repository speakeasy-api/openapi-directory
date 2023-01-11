package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlInstancesDemoteMasterSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesDemoteMasterSecurityOption1 option1;
    public SqlInstancesDemoteMasterSecurity withOption1(SqlInstancesDemoteMasterSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlInstancesDemoteMasterSecurityOption2 option2;
    public SqlInstancesDemoteMasterSecurity withOption2(SqlInstancesDemoteMasterSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}