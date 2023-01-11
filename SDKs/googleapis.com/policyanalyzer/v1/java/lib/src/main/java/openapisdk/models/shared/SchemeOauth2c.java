package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOauth2c {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOauth2c withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}