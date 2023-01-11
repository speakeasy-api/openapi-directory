package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOauth2 {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOauth2 withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}