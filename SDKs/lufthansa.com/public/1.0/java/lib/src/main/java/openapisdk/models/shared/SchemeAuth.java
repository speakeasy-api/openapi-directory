package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}