package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SecurityOption2 {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiKey apiKey;
    public SecurityOption2 withApiKey(SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiSig apiSig;
    public SecurityOption2 withApiSig(SchemeApiSig apiSig) {
        this.apiSig = apiSig;
        return this;
    }
}