package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlSslCertsGetSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsGetSecurityOption1 option1;
    public SqlSslCertsGetSecurity withOption1(SqlSslCertsGetSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsGetSecurityOption2 option2;
    public SqlSslCertsGetSecurity withOption2(SqlSslCertsGetSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}