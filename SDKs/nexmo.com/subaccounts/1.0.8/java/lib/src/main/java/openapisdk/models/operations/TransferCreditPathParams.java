package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferCreditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public TransferCreditPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}