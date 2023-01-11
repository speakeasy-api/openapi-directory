package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeJwtAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeJwtAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}