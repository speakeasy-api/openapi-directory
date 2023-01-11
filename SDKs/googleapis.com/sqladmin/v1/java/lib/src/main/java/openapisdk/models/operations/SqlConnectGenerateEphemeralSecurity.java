package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SqlConnectGenerateEphemeralSecurity {
    @SpeakeasyMetadata("security:option=true")
    public SqlConnectGenerateEphemeralSecurityOption1 option1;
    public SqlConnectGenerateEphemeralSecurity withOption1(SqlConnectGenerateEphemeralSecurityOption1 option1) {
        this.option1 = option1;
        return this;
    }
    @SpeakeasyMetadata("security:option=true")
    public SqlConnectGenerateEphemeralSecurityOption2 option2;
    public SqlConnectGenerateEphemeralSecurity withOption2(SqlConnectGenerateEphemeralSecurityOption2 option2) {
        this.option2 = option2;
        return this;
    }
}