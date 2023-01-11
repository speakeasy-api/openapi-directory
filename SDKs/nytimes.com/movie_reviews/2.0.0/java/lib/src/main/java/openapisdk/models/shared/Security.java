package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApikey apikey;
    public Security withApikey(SchemeApikey apikey) {
        this.apikey = apikey;
        return this;
    }
}