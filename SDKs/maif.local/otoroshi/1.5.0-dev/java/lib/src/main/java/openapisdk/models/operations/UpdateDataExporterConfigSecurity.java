package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDataExporterConfigSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth;
    public UpdateDataExporterConfigSecurity withOtoroshiAuth(openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth) {
        this.otoroshiAuth = otoroshiAuth;
        return this;
    }
}