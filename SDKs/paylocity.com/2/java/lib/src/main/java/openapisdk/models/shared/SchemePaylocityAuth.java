package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemePaylocityAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemePaylocityAuth withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}