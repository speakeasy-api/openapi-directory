package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlSslCertsDeleteSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsDeleteSecurityOption1 option1;
    public SqlSslCertsDeleteSecurity withOption1(SqlSslCertsDeleteSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsDeleteSecurityOption2 option2;
    public SqlSslCertsDeleteSecurity withOption2(SqlSslCertsDeleteSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}