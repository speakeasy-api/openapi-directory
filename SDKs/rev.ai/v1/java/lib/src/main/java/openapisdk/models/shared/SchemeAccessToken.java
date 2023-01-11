package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAccessToken {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeAccessToken withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}