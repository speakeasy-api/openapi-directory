package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeSakariAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeSakariAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}