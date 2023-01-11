package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAdvSecurityToken {
    @SpeakeasyMetadata("security:name=ADVICEment API Key")
    public String apiKey;
    public SchemeAdvSecurityToken withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}