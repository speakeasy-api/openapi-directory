package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReadAccountDetailsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth;
    public ReadAccountDetailsSecurity withBearerAuthOAuth(openapisdk.models.shared.SchemeBearerAuthOAuth bearerAuthOAuth) {
        this.bearerAuthOAuth = bearerAuthOAuth;
        return this;
    }
}