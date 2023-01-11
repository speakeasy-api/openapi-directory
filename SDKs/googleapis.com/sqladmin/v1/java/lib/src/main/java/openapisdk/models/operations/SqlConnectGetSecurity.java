package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlConnectGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlConnectGetSecurityOption1 option1;
    public SqlConnectGetSecurity withOption1(SqlConnectGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlConnectGetSecurityOption2 option2;
    public SqlConnectGetSecurity withOption2(SqlConnectGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}