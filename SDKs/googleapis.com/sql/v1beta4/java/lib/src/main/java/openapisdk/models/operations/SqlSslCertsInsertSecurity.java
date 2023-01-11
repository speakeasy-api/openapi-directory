package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlSslCertsInsertSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsInsertSecurityOption1 option1;
    public SqlSslCertsInsertSecurity withOption1(SqlSslCertsInsertSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsInsertSecurityOption2 option2;
    public SqlSslCertsInsertSecurity withOption2(SqlSslCertsInsertSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}