package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopUpAccountBalanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public TopUpAccountBalanceQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_secret")
    public String apiSecret;
    public TopUpAccountBalanceQueryParams withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
}