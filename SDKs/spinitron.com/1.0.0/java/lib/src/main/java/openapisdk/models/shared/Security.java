package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public SchemeHttpBearer httpBearer;
    public Security withHttpBearer(SchemeHttpBearer httpBearer) {
        this.httpBearer = httpBearer;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeAccessToken accessToken;
    public Security withAccessToken(SchemeAccessToken accessToken) {
        this.accessToken = accessToken;
        return this;
    }
}