package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveApiSecretsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public RetrieveApiSecretsPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}