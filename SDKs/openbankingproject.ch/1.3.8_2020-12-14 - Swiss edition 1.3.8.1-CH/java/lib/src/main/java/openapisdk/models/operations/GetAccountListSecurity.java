package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountListSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth;
    public GetAccountListSecurity withBearerAuthOAuth(openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth) {
        this.bearerAuthOAuth = bearerAuthOAuth;
        return this;
    }
}