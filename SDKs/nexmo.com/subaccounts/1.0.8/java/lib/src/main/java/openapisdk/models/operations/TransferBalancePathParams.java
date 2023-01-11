package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferBalancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public TransferBalancePathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}