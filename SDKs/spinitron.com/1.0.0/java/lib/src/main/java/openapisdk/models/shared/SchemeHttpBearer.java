package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeHttpBearer {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeHttpBearer withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}