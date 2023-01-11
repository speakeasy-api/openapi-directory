package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchServiceSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth;
    public PatchServiceSecurity withOtoroshiAuth(openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth) {
        this.otoroshiAuth = otoroshiAuth;
        return this;
    }
}