package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeClientCredentialsToken {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeClientCredentialsToken withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}