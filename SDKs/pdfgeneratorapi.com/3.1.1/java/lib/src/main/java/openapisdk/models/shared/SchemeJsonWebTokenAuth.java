package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeJsonWebTokenAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeJsonWebTokenAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}