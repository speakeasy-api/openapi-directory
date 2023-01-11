package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=api_key")
    public String apiKey;
    public TransferNumberPathParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}