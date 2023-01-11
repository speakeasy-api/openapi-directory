package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveBalanceTransfersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public RetrieveBalanceTransfersPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}