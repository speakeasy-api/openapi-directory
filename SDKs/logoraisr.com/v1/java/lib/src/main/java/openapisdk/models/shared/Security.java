package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeToken token;
    public Security withToken(SchemeToken token) {
        this.token = token;
        return this;
    }
}