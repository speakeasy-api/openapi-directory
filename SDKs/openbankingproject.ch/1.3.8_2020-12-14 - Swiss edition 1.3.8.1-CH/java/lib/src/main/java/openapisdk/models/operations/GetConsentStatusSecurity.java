package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsentStatusSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth;
    public GetConsentStatusSecurity withBearerAuthOAuth(openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth) {
        this.bearerAuthOAuth = bearerAuthOAuth;
        return this;
    }
}