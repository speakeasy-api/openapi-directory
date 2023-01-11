package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopSnowMonkeySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth;
    public StopSnowMonkeySecurity withOtoroshiAuth(openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth) {
        this.otoroshiAuth = otoroshiAuth;
        return this;
    }
}