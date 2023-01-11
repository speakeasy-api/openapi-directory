package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeBearerToken {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeBearerToken withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}