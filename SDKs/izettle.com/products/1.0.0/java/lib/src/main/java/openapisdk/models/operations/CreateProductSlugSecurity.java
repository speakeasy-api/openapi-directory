package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProductSlugSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeZettleOauth zettleOauth;
    public CreateProductSlugSecurity withZettleOauth(openapisdk.models.shared.SchemeZettleOauth zettleOauth) {
        this.zettleOauth = zettleOauth;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeZettleApiKey zettleApiKey;
    public CreateProductSlugSecurity withZettleApiKey(openapisdk.models.shared.SchemeZettleApiKey zettleApiKey) {
        this.zettleApiKey = zettleApiKey;
        return this;
    }
}