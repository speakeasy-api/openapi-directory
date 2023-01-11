package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeMerakiApiKey merakiApiKey;
    public Security withMerakiApiKey(SchemeMerakiApiKey merakiApiKey) {
        this.merakiApiKey = merakiApiKey;
        return this;
    }
}