package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeJwt {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeJwt withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}