package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateApiKeySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth;
    public UpdateApiKeySecurity withOtoroshiAuth(openapisdk.models.shared.SchemeOtoroshiAuth otoroshiAuth) {
        this.otoroshiAuth = otoroshiAuth;
        return this;
    }
}