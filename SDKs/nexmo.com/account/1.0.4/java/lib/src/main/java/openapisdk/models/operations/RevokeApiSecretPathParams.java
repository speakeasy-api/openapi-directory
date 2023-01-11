package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeApiSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public RevokeApiSecretPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=secret_id")
    public String secretId;
    public RevokeApiSecretPathParams withSecretId(String secretId) {
        this.secretId = secretId;
        return this;
    }
}