package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConsentSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth;
    public CreateConsentSecurity withBearerAuthOAuth(openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth) {
        this.bearerAuthOAuth = bearerAuthOAuth;
        return this;
    }
}