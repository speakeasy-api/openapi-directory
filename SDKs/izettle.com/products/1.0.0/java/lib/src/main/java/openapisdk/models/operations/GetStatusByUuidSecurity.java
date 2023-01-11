package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatusByUuidSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeZettleApiKey zettleApiKey;
    public GetStatusByUuidSecurity withZettleApiKey(openapisdk.models.shared.SchemeZettleApiKey zettleApiKey) {
        this.zettleApiKey = zettleApiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeZettleOauth zettleOauth;
    public GetStatusByUuidSecurity withZettleOauth(openapisdk.models.shared.SchemeZettleOauth zettleOauth) {
        this.zettleOauth = zettleOauth;
        return this;
    }
}