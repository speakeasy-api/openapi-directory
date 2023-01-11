package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlFlagsListSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlFlagsListSecurityOption1 option1;
    public SqlFlagsListSecurity withOption1(SqlFlagsListSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlFlagsListSecurityOption2 option2;
    public SqlFlagsListSecurity withOption2(SqlFlagsListSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}