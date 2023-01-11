package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlSslCertsCreateEphemeralSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsCreateEphemeralSecurityOption1 option1;
    public SqlSslCertsCreateEphemeralSecurity withOption1(SqlSslCertsCreateEphemeralSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlSslCertsCreateEphemeralSecurityOption2 option2;
    public SqlSslCertsCreateEphemeralSecurity withOption2(SqlSslCertsCreateEphemeralSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}