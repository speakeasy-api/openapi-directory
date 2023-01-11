package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public SchemeGithubAccessCode githubAccessCode;
    public Security withGithubAccessCode(SchemeGithubAccessCode githubAccessCode) {
        this.githubAccessCode = githubAccessCode;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeInternalApiKey internalApiKey;
    public Security withInternalApiKey(SchemeInternalApiKey internalApiKey) {
        this.internalApiKey = internalApiKey;
        return this;
    }
}