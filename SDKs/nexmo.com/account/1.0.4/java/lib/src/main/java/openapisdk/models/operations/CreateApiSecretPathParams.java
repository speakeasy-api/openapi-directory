package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiSecretPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public CreateApiSecretPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}