package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOauth2Legacy {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOauth2Legacy withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}