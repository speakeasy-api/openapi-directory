package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public SchemeAccessToken accessToken;
    public Security withAccessToken(SchemeAccessToken accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}