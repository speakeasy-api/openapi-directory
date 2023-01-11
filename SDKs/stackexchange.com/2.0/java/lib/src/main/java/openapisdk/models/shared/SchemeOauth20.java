package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOauth20 {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeOauth20 withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}