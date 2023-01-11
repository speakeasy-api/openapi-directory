package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeApiTokens apiTokens;
    public Security withApiTokens(SchemeApiTokens apiTokens) {
        this.apiTokens = apiTokens;
        return this;
    }
}