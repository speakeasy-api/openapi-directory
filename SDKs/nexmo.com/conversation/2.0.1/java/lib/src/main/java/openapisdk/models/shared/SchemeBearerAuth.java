package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeBearerAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeBearerAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}