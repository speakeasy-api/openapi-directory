package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeZettleOauth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeZettleOauth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}