package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSigningBasketStatusSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth;
    public GetSigningBasketStatusSecurity withBearerAuthOAuth(openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth) {
        this.bearerAuthOAuth = bearerAuthOAuth;
        return this;
    }
}