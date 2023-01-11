package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOpenIdConnect {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOpenIdConnect withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}