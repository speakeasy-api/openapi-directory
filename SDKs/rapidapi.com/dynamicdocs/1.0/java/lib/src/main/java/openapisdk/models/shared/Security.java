package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeAdvSecurityToken advSecurityToken;
    public Security withAdvSecurityToken(SchemeAdvSecurityToken advSecurityToken) {
        this.advSecurityToken = advSecurityToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeXRapidApiKey xRapidAPIKey;
    public Security withXRapidApiKey(SchemeXRapidApiKey xRapidAPIKey) {
        this.xRapidAPIKey = xRapidAPIKey;
        return this;
    }
}