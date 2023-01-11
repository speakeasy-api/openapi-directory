package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeGithubAccessCode {
    @SpeakeasyMetadata("security:name=Authorization")
    public String authorization;
    public SchemeGithubAccessCode withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}