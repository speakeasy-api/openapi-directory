package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeBearerAuthOAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeBearerAuthOAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}