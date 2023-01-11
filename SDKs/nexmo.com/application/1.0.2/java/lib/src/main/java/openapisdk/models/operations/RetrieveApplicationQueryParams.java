package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveApplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public RetrieveApplicationQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_secret")
    public String apiSecret;
    public RetrieveApplicationQueryParams withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
}